import { ChildrenType } from "@/common/types/reactTypes"
import { ClassNameType } from "@/common/types/types"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function ReaderCard({ children, className }: { children: ChildrenType, className?: ClassNameType }) {
    return (
        <>
            {/* desktop =================================== */}
            <DropdownMenu>
                <DropdownMenuTrigger className={`hidden sm:flex p-0 min-w-fit outline-none focus:outline-none cursor-pointer ${className || ""}`}>
                    {children}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="hidden sm:flex p-0 outline-none focus:outline-none min-w-fit border-none bg-transparent">
                    <AboutReaderPopup />
                </DropdownMenuContent>
            </DropdownMenu>

            {/* mobile =================================== */}
            <Drawer>
                <DrawerTrigger className={`flex sm:hidden p-0 min-w-fit outline-none focus:outline-none cursor-pointer ${className || ""}`}>
                    {children}
                </DrawerTrigger>

                <DrawerContent className="flex sm:hidden p-0 outline-none focus:outline-none min-w-fit border-none bg-transparent">
                    <AboutReaderPopup />
                </DrawerContent>
            </Drawer>
        </>
    )
}


function AboutReaderPopup() {
    return (
        <section className="w-screen sm:w-[300px] px-3 sm:px-4 pt-8 pb-5 sm:py-4 rounded-t-lg sm:rounded-lg bg-red-500">
            Reader Card
        </section>
    )
}