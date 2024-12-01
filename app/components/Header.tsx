import Button from "./Button";
import AppLogo from "./sub-components/AppLogo";
import { FaBookOpen } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky w-full mt-2 py-4 px-1 min-h-16 row items-center justify-evenly gap-2">
      <div className="w-full row items-center justify-between gap-2">
        <Button><FaBookOpen size={32}/></Button>
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
