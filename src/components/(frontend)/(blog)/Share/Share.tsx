import { ClassNameType } from "@/common/types/types"
import { Share2Icon } from "lucide-react"

export default function Share({ className, svgDimensions }: { className: ClassNameType, svgDimensions?: number }) {
    return (
        <span className={`p-2 cursor-pointer ${className}`}>
            <Share2Icon width={svgDimensions || 18} height={svgDimensions || 18} />
        </span>
    )
}