import Image from "next/image";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function Band() {
  return (
    <div className="flex h-screen flex-col items-center ">
      <div className="relative w-full h-1/2 overflow-hidden">
        <ViewTransition name="men-i-trust" enter="slide-in" exit="slide-out">
          <Image
            src="/men-i-trust.jpg"
            alt="Men i Trust"
            fill
            className=" w-fit object-cover "
            sizes="(max-width: 768px) 100vw, 1280px"
            priority
            unoptimized
          />
        </ViewTransition>
      </div>

      <Link href="/" prefetch>
        back to home
      </Link>
    </div>
  );
}
