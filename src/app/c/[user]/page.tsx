"use client";
import OtherUserTable from "./OtherUserTable";
import StudentUserTable from "./StudentUserTable";
import TeacherUserTable from "./TeacherUserTable";

export default function Page({ params }: { params: { user: string } }) {
  if (params.user === "teachers") return <TeacherUserTable />;
  else if (params.user === "students") return <StudentUserTable />;
  else return <OtherUserTable />;
}
