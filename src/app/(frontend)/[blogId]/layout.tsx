import { ChildrenType } from "@/common/types/reactTypes"
import BlogHeader from "@/components/(frontend)/(blog)/BlogHeader/BlogHeader"
import Comments from "@/components/(frontend)/(blog)/Comments/Comments"
import Likes from "@/components/(frontend)/(blog)/Likes/Likes"

export default function BlogPostLayout({ children }: { children: ChildrenType }) {
    return (
        <>
            <BlogHeader blogTitle="Some new blog" />
            {children}
            <Likes />
            <Comments />
        </>
    )
}