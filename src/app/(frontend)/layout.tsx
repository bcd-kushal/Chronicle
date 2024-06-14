import { ChildrenType } from "@/common/types/reactTypes"
import Footer from "@/components/(frontend)/Footer/Footer"
import Header from "@/components/(frontend)/Header/Header"
import { getThemeCookie } from "@/server/cookies/theme"



export default async function HomepageLayout({ children }: { children: ChildrenType }) {
    const theme = await getThemeCookie()
    return (
        <>
            <Header theme={theme} />
            <div className="flex flex-col justify-start items-stretch max-w-[1200px] px-[12px] mt-4 mb-10 min-[1200px]:px-0 relative left-1/2 -translate-x-1/2"> {children} </div>
            <Footer />
        </>
    )
}