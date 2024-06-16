'use client'
import { ClassNameType } from "@/common/types/types"
import { StarIcon } from "lucide-react"

export default function Favorite({ className, isSelected, svgDimensions }: { className: ClassNameType, isSelected: boolean, svgDimensions?: number }) {
    return (
        <span className={`p-2 cursor-pointer ${className}`}>
            <StarIcon width={svgDimensions || 18} height={svgDimensions || 18} fill={isSelected ? "#f3e" : "transparent"} />
        </span>
    )
}