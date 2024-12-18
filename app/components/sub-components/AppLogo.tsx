import type { DetailedHTMLProps, HTMLAttributes } from "react";
import Logo from "@/public/assets/green_alien_head_vector_logo-removebg-preview.png"
import Image from "next/image";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export default function AppLogo({ className, ...props }: Props) {
    return (
        <h2 {...props} className={`text-4xl font-redzone app-logo ${className}`}>
            <Image alt="Logo" width={60} height={60} src={Logo}></Image>
        </h2>
    );
    return (
        <h2 className="font-redzone text-4xl bg-gradient-to-br from-app via-fuchsia-300/80 bg-clip-text text-transparent">
            <Image alt="Logo" src={Logo}></Image>
        </h2>
    );
}
