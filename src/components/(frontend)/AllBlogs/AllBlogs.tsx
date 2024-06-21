import { AllBlogsType } from "./utils/types"
import BlogGhost from "../(blog)/BlogGhost/BlogGhost"

export default function AllBlogs({ category }: { category: string }) {
    const allBlogs: AllBlogsType = [
        { id: "", title: "Understanding React Server Components", createdAt: new Date(), thumbnail: { alt: "", url: "https://github.com/bcd-kushal.png" } },
        { id: "", title: "Understanding React Server Components", createdAt: new Date(), thumbnail: { alt: "", url: "https://github.com/bcd-kushal.png" } },
        { id: "", title: "Understanding React Server Components", createdAt: new Date(), thumbnail: { alt: "", url: "https://github.com/bcd-kushal.png" } },
        { id: "", title: "Understanding React Server Components", createdAt: new Date(), thumbnail: { alt: "", url: "https://github.com/bcd-kushal.png" } },
        { id: "", title: "Understanding React Server Components", createdAt: new Date(), thumbnail: { alt: "", url: "https://github.com/bcd-kushal.png" } },
    ]
    
    return (
        <>
        <section className="mt-2 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8 md:gap-10">
            {allBlogs.map((blog, index) => (
                <BlogGhost blog={blog} page="category" key={index} />
            ))}
        </section>
        <div className="p-2 max-w-[370px] relative left-1/2 -translate-x-1/2 rounded-lg text-center bg-zinc-100 dark:bg-[#111] my-6 border-[1.5px] border-black/10 hover:border-black/30 text-black/50 hover:text-black/70 dark:border-white/10 dark:hover:border-white/20 dark:text-white/50 dark:hover:text-white dark:hover:bg-zinc-900 transition-all duration-300 cursor-pointer">
            Load more
        </div>
        </>
    )
}