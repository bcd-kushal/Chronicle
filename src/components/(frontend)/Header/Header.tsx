import Link from "next/link"
import Search from "./components/Search/Search"
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch"
import { ThemeType } from "@/common/types/types"


export default async function Header({ theme }: { theme: ThemeType }) {
    return (
        <div className="py-2 z-50 backdrop-blur-md sticky top-0 border-b-[1px] border-black/20 dark:border-white/20">
            <header className="max-w-[1200px] relative left-1/2 -translate-x-1/2 px-[12px] min-[1200px]:px-0 flex items-center justify-between">

                {/* left side -------------------------- */}
                <span className="flex gap-1 items-center">
                    <Link href={"/"} className="text-lg sm:text-base font-medium py-2 mr-4">Blogs by Shubham</Link>
                </span>

                {/* right side -------------------------- */}
                <span className="flex items-center gap-2 justify-end">
                    <Search />
                    <ThemeSwitch theme={theme}  />
                </span>

            </header>
        </div>
    )
}