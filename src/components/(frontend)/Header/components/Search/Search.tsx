'use client'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { DialogTrigger } from "@radix-ui/react-dialog"
import { SearchIcon, TentTreeIcon } from "lucide-react"

export default function Search() {
    return (
        <Dialog>
            <DialogTrigger className="group flex items-center justify-center p-2 aspect-square transition-all duration-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg outline-none focus:outline-none">
                <SearchIcon width={20} height={20} className="stroke-zinc-500 transition-colors duration-300 group-hover:stroke-black dark:group-hover:stroke-white" name="search"/>
            </DialogTrigger>

            <DialogContent className="min-w-fit p-0 border-none top-1/4 sm:-translate-y-[18%]  max-w-[calc(100dvw_-_28px)] sm:max-w-[500px]">
                <Command className="rounded-lg border-[1.5px] border-zinc-700 dark:border-white/20">
                    <CommandInput placeholder="Search blogs & categories"  />

                    <CommandList className="flex flex-col items-stretch justify-start gap-5">
                        <CommandEmpty>
                            <TentTreeIcon className="stroke-zinc-500" height={56} width={56} strokeWidth={1}/>
                            <span className="text-zinc-500">No matches found</span>
                        </CommandEmpty>

                        <CommandGroup heading="Blogs">
                            <CommandItem>
                                <span>Hello</span>
                            </CommandItem>
                        </CommandGroup>
                        
                        <CommandGroup heading="Categories">
                            <CommandItem>
                                <span>Hello</span>
                                <span>Hello</span>
                            </CommandItem>
                        </CommandGroup>
                        
                        <CommandGroup heading="User">
                            <CommandItem>
                                <span>Hello</span>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </DialogContent>
        </Dialog>
    )
}