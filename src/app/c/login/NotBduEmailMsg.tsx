import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function NotBduEmailMsg({ email }: { email: string }) {
  return (
    <div className="w-[400px] mx-auto mt-[150px]">
      <Image
        src="/image/block.png"
        className="mx-auto"
        width="150"
        height="0"
        alt="Account not allowed"
      />
      <div className="mt-8 text-center fontGs text-2xl">Email not allowed</div>
      <div className="mt-8 text-center">
        It seems that {email} is not allowed to use BDU Apps. Try with the email
        that BDU provided to you.
      </div>
      <div className="mt-8 text-center">Have another account?</div>
      <div className="w-fit mx-auto mt-5 space-x-2">
        <button className="btn" onClick={() => signIn("google")}>
          Switch account
        </button>
        <Link href="/c/app" className="btn2">
          Home page
        </Link>
      </div>
    </div>
  );
}
