import GoogleIcons from "@/components/icons/google";
import IconSkeleton from "@/components/icons/icon-skeleton";
import ModalContainer, {
  closingTransition,
} from "@/components/modal-container";
import { useCallback, useRef, useState } from "react";
import { CSVLink } from "react-csv";
import SelectSession from "./SelectSession";
import SelectProgram from "./SelectProgram";
import SpinLoader from "@/components/preloader/spin";
import axios from "@/utils/apix/axios";
import { Toast } from "@/components/toastify";
import { downloadCSV } from "@/utils/download-csv";

export interface FormData {
  session: { id: number; value: string };
  program: { id: number; full: string; short: string };
}

export default function ImportCsvModal({ params }: any) {
  const { setShowImportCsvModal } = params;
  const [isCreating, setIsCreating] = useState<boolean>(false);

  const closeModal = useCallback(() => {
    closingTransition(() => {
      setShowImportCsvModal(false);
    });
  }, [setShowImportCsvModal]);

  // Storing data for CSV file content --->
  const csvFilesData = [
    {
      Name: "Mohaimenul Islam Mahin",
      Email: "mahin@gmail.com",
      ID: 1901025,
      Gender: "Male",
    },
    {
      Name: "Bitto Boivob",
      Email: "bitto@gmail.com",
      ID: 1901050,
      Gender: "Male",
    },
  ];
  // <--- Storing data for CSV file content

  const [formData, setFormData] = useState<FormData>({
    session: { id: 1, value: "Loading..." },
    program: {
      id: 1,
      full: "Loading...",
      short: "Loading...",
    },
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e: any) {
      const text = e.target.result;
      const lines = text.split("\n");
      const headers = lines[0].split(",");

      const data = [];
      for (let i = 1; i < lines.length; i++) {
        const row = lines[i].split(",");
        if (row.length === headers.length) {
          const obj: any = {};
          for (let j = 0; j < headers.length; j++) {
            const header = headers[j].trim();
            obj[header] = row[j].trim();
          }
          data.push(obj);
        }
      }

      console.log(data);
      if (data.length) doCreate(data);
    };
    reader.readAsText(file);
    closeModal();
  };

  // Insert student users
  async function doCreate(input: any[]) {
    setIsCreating(true);
    const res = await axios.post("/api/users/import-csv", {
      formData: formData,
      input: input,
    });
    if (res.ok) {
      if (res.refusedData.length) {
        alert("Some data are refused, Check the downloaded CSV file.");
        downloadCSV(res.refusedData, "refused-to-insert");
      }
      Toast(`${res.insertionComplete}/${res.totalRecord} insertion Completed`);
    }
    setIsCreating(false);
  }
  return (
    <ModalContainer>
      <div className="w-[600px] h-full bg-white dark:bgBlack2 rounded-lg">
        <div className="w-full h-full px-8 py-12 rounded-lg">
          {/* navbar */}
          <div className="mb-6 flex items-center gap-4">
            <IconSkeleton title="Back" onClick={() => closeModal()}>
              <GoogleIcons.arrow.back className="fill-gray-500" />
            </IconSkeleton>
            <div className="text-xl fontGs text-gray-600">
              Import Student Info
            </div>
          </div>

          <div className="mb-6 space-y-1">
            <div className="flex items-center gap-4">
              <div>1. Which Session?</div>
              <SelectSession params={{ formData, setFormData }} />
            </div>
            <div className="flex items-center gap-4">
              <div>2. Which Program?</div>
              <SelectProgram params={{ formData, setFormData }} />
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <input
              type="file"
              id="csvFileInput"
              accept=".csv"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
            {isCreating ? (
              <div className="w-full py-8 flex justify-center">
                <SpinLoader />
              </div>
            ) : (
              <div className="py-8 flex flex-col items-center justify-center">
                <button
                  onClick={() => {
                    if (fileInputRef.current) fileInputRef.current.click();
                  }}
                  className="btn"
                >
                  Import CSV
                </button>
                <div className="mt-3 text-gray-500 fontGs text-lg">
                  Upload CSV file here
                </div>
              </div>
            )}
          </div>

          {/* ---------- */}

          <div className="mt-7 pt-6 border-t border-gray-300">
            <div className="space-y-2">
              <div className="fontGsm">Be concern of these following,</div>
              <ul className="ml-4 space-y-2 list-disc">
                <li>Only student user info can be inserted.</li>
                <li>Unique email is required to insert.</li>
                <li>Duplicated email record will be refused to insert.</li>
              </ul>
              <div>
                Don&apos;t know about import CSV format?{" "}
                <CSVLink
                  data={csvFilesData}
                  filename="CSV-format-to-import-students"
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  Download format
                </CSVLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}
