import type { DetailedHTMLProps, HTMLAttributes } from "react";
import Image from "next/image";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export default function AppLogo({ className, ...props }: Props) {
    return (
        <h2 {...props} className={`text-2xl font-redzone app-logo ${className}`}>
            <span>CryptoForMars</span>
        </h2>
    );
    return (
        <h2 className="font-redzone text-2xl bg-gradient-to-br from-app via-fuchsia-300/80 bg-clip-text text-transparent">
            <span>CryptoForMars</span>
        </h2>
    );
}
