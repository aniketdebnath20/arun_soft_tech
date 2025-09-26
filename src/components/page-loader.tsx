
'use client';

import Image from "next/image";

export function PageLoader() {
  return (
    <div
      id="page-loader"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
      style={{ display: 'flex' }}
    >
      <Image
        src="/Loading-unscreen.gif"
        alt="Loading..."
        width={300}
        height={100}
        className="flex justify-center items-center"
      />
    </div>
  );
}
