import Image from "next/image"
import React from "react";

const Logo = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
 return (
    <div ref={ref} {...props} className="h-auto w-[200px] flex item-center justify-center">
      <Image src="/logo.svg" alt="logo" width={160} height={100}/>
    </div>
 )
});

Logo.displayName = 'Logo';

export default Logo;
