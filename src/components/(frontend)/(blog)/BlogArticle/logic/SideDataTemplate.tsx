import { ChildrenType } from "@/common/types/reactTypes"

export function SideDataTemplate({ title, gap, children }: { title: string, gap: number, children: ChildrenType }) {
    return (
        <section className={`flex flex-col justify-start mb-10 gap-${gap}`}>
            <span className={`text-xl font-semibold md:font-normal md:text-sm md:text-black/45 md:dark:text-white/40 ${gap >= 7 ? "-mb-2" : ""}`}>{title}</span>
            {children}
        </section>
    )
}