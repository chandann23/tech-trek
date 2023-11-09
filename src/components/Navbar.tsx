import { GraduationCap } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { getAuthSession } from "@/lib/authOptions";

const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <GraduationCap className="mr-2 h-8 w-8" />
          </Link>

          {/* add mobile navbar */}

          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              className={buttonVariants({ variant: "ghost", size: "sm" })}
              href="/pricing"
            >
              Pricing
            </Link>

            {session ? (<Link href="/dashboard" className={buttonVariants({size : "sm"})}>Dashboard</Link>) : (<Link href="/sign-in" className={buttonVariants({ size: "sm" })}>Sign in</Link>)}
            
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
