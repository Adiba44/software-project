import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export default function EmailNotRegisteredMsg({
  setPage,
  email,
}: {
  setPage: Dispatch<SetStateAction<string>>;
  email: string;
}) {
  return (
    <div className="w-[400px] mx-auto mt-[150px]">
      <Image
        src="/image/block.png"
        className="mx-auto"
        width="150"
        height="0"
        alt="Account not allowed"
      />
      <div className="mt-8 text-center fontGs text-2xl">
        Email not registered
      </div>
      <div className="mt-8 text-center">
        It seems that {email} is not registered on BDU Accounts. To create a new
        account click on{" "}
        <span className="textBlue hober:textBlue2 cursor-pointer hover:underline">
          create new
        </span>
        .
      </div>
      <div className="mt-8 text-center">Have another account?</div>
      <div className="w-fit mx-auto mt-5 space-x-2">
        <button className="btn" onClick={() => signIn("google")}>
          Switch account
        </button>
        <button className="btn2" onClick={() => setPage("signupForm")}>
          Create new
        </button>
      </div>
    </div>
  );
}
