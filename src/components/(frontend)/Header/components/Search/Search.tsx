'use client'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { DialogTrigger } from "@radix-ui/react-dialog"
import { SearchIcon } from "lucide-react"

export default function Search() {
    return (
        <Dialog>
            <DialogTrigger className="group flex items-center justify-center p-2 aspect-square transition-all duration-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg">
                <SearchIcon width={20} height={20} className="stroke-zinc-500 transition-colors duration-300 group-hover:stroke-black dark:group-hover:stroke-white" />
            </DialogTrigger>

            <DialogContent>
                Search box
            </DialogContent>
        </Dialog>
    )
}