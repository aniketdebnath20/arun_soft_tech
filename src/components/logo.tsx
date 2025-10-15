import Image from "next/image";
import { cn } from "@/lib/utils";

const Logo = () => {
    return (
        <div className={cn("w-[16rem] h-[7rem] flex items-center justify-center")}>
            <Image
                src="/logo.png"
                alt="logo"
                width={240}
                height={240}
            />
        </div>
    );
};

export default Logo;
