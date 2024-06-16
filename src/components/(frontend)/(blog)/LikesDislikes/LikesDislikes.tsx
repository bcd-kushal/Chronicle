import { ThumbsUpIcon, ThumbsDownIcon } from "lucide-react"
import { LikesDislikesType } from "./utils/types"
import { inThousands } from "@/common/utils/inThousands"
import { COMMON_STYLES, FULL_DEFAULT_STYLES, FULL_SELECTED_STYLES } from "./utils/constants"

export default function LikesDislikes({ config, type }: { config: LikesDislikesType, type: "expanded" | "default" }) {
    const { likes, isSelected } = config
    return (
        <div className={`w-fit overflow-hidden items-stretch justify-start ${type === "default" ? "*:py-1 *:px-[14px] flex sm:hidden" : "*:px-5 *:py-2 hidden sm:flex"}`}>
            <div className={`${COMMON_STYLES} rounded-l-full ${isSelected && config.selection === "like" ? FULL_SELECTED_STYLES : FULL_DEFAULT_STYLES} ${(isSelected && config.selection === "dislike") || !isSelected ? "border-r-0" : ""}`}><ThumbsUpIcon width={16} height={16} /><span>{inThousands(likes)}</span></div>
            <div className={`${COMMON_STYLES} rounded-r-full ${isSelected && config.selection === "dislike" ? FULL_SELECTED_STYLES : FULL_DEFAULT_STYLES} ${isSelected && config.selection === "like" ? "border-l-0" : ""}`}><ThumbsDownIcon width={16} height={16} className={type === "expanded" ? "-translate-x-[2px]" : ""} /></div>
        </div>
    )
}