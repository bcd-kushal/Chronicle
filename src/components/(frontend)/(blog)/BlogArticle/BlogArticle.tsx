import styles from "@/decorators/blogData.module.css"
import { EyeIcon, UserIcon, CalendarIcon, ThumbsUpIcon, MessageCircleIcon } from "lucide-react"
import BlogGhost from "../BlogGhost/BlogGhost"
import { BlogAtomicDataDocument } from "@/common/types/documents/documents"
import { SideDataTemplate } from "./logic/SideDataTemplate"
import moment from "moment"
import { DATE_FORMAT } from "@/common/constants/dateFormats"
import LikesDislikes from "../LikesDislikes/LikesDislikes"
import Favorite from "../Favorite/Favorite"
import Share from "../Share/Share"
import BlogTopHeading from "./logic/BlogTopHeading"
import { AUTHOR } from "@/common/constants/author"
import { inThousands } from "@/common/utils/inThousands"

export default async function BlogArticle({ blogArticle, tag }: { blogArticle: string, tag: string }) {
    const relatedBlogs: BlogAtomicDataDocument[] = [
        { id: "", title: "Understanding React Server Components", createdAt: new Date(), thumbnail: { alt: "", url: "https://github.com/bcd-kushal.png" } },
        { id: "", title: "Understanding React Server Components", createdAt: new Date(), thumbnail: { alt: "", url: "https://github.com/bcd-kushal.png" } },
        { id: "", title: "Understanding React Server Components", createdAt: new Date(), thumbnail: { alt: "", url: "https://github.com/bcd-kushal.png" } },
        { id: "", title: "Understanding React Server Components", createdAt: new Date(), thumbnail: { alt: "", url: "https://github.com/bcd-kushal.png" } },
        { id: "", title: "Understanding React Server Components", createdAt: new Date(), thumbnail: { alt: "", url: "https://github.com/bcd-kushal.png" } },
    ]

    const blogInfo = [
        { key: <UserIcon width={15} height={15} />, value: "Shubham Sharma" },
        { key: <CalendarIcon width={15} height={15} />, value: "Posted on 19th Jun, 2024" },
        { key: <ThumbsUpIcon width={15} height={15} />, value: "32 likes" },
        { key: <EyeIcon width={15} height={15} />, value: "402 views" },
    ]
    return (
        <>
            <main className="grid px-3 min-[1200px]:px-0 grid-cols-1 md:grid-cols-[auto_380px]">
                <BlogTopHeading date={new Date()} tag={tag} title="Understanding React Server Components" />
                <span></span>
                <div>
                    <article dangerouslySetInnerHTML={{ __html: blogArticle }} className={styles.blogArticle} />
                    <div className="flex items-center justify-between gap-3 pt-10">
                        <div className="flex items-center justify-start gap-3">
                            <LikesDislikes config={{ isSelected: true, likes: 2004, selection: "like" }} type="expanded" />
                            <Share className="" />
                        </div>
                        <span className="flex items-center justify-end gap-2 cursor-pointer text-black/60 dark:text-white/60 transition-all duration-300 hover:text-black dark:hover:text-white"><MessageCircleIcon height={18} width={18}/><span>Leave a Comment</span></span>
                    </div>
                </div>
                <BlogMiscellaneousDetails date={new Date()} likes={2004} views={18390} relatedBlogs={relatedBlogs} />
            </main>

            {/* MOBILE UI BOTTOM STICKY ACTIONS TAB ============================== */}
            <div className="sticky bottom-0 px-3 bg-background md:hidden border-t-[1.5px] border-black/10 dark:border-white/15 flex items-center justify-between gap-5">
                <LikesDislikes config={{ likes: 32, isSelected: true, selection: "like" }} type="default" />
                <div className="flex items-center justify-end gap-2 py-2 text-black/70 dark:text-white/55">
                    <Favorite className="" isSelected={false} />
                    <Share className="" />
                </div>
            </div>
        </>
    )
}



function BlogMiscellaneousDetails({ date, likes, views, relatedBlogs }: { date: Date, likes: number, views: number, relatedBlogs: BlogAtomicDataDocument[] }) {
    const blogInfo = [
        { key: <UserIcon width={15} height={15} />, value: AUTHOR },
        { key: <CalendarIcon width={15} height={15} />, value: moment(date).format(DATE_FORMAT.SHORT) },
        { key: <ThumbsUpIcon width={15} height={15} />, value: `${inThousands(likes)} like${likes > 1 ? 's' : ''}` },
        { key: <EyeIcon width={15} height={15} />, value: `${inThousands(views)} view${views > 1 ? 's' : ''}` },
    ]

    return (
        <section className="grid grid-cols-1 md:grid-cols-[50px_auto]">
            <span className="ml-8 mr-4 w-[1.5px] bg-black/10 dark:bg-white/10 hidden md:block" />
            <div className="flex flex-col justify-start gap-4 mt-12 pt-10 md:pt-0 md:border-none md:mt-0 border-t-[1.5px] border-white/15 md:pl-2">

                <SideDataTemplate title="Info" gap={3}>
                    {blogInfo.map(({ key, value }, index) => (
                        <div className="grid grid-cols-[28px_auto] items-center text-sm text-black/80 dark:text-white/80" key={index}>{key}<span>{value}</span></div>
                    ))}
                </SideDataTemplate>

                <SideDataTemplate title="Related Blogs" gap={8}>
                    {relatedBlogs
                        .filter((_, index) => index < 3)
                        .map((blog, index) => (
                            <BlogGhost blog={blog} page="blog" key={index} />
                        ))}
                </SideDataTemplate>

            </div>
        </section>
    )
}