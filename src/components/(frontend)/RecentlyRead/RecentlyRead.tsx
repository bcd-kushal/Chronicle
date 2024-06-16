import { RecentlyReadDataType } from "./utils/types"
import BlogMiniCard from "../(blog)/BlogMiniCard/BlogMiniCard"

export default function RecentlyRead({ data }: { data: RecentlyReadDataType }) {
    return (
        <section className="mt-2 mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 grid-rows-[120px]">
            {data
                .filter((_, index) => index < 3)
                .map((blog, index) => (
                    <BlogMiniCard title={blog.title} createdAt={blog.createdAt} thumbnail={blog.thumbnail} key={index} />
                ))}
        </section>
    )
}