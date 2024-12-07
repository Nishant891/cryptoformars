import Button from "./Button";
import AppLogo from "./sub-components/AppLogo";
import { FaBookOpen } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky w-full mt-2 py-4 px-1 min-h-16 row items-center justify-evenly gap-2">
      <div className="w-full row items-center justify-between gap-2">
        <Link href="/blog"><FaBookOpen size={32}/></Link>
        <AppLogo
          onClick={() => window.location.assign("/")}
          className="cursor-pointer"
        />
        <div className="row items-center gap-12">
          <div className="hidden sm:block">
            <Button>Connect Wallet</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
