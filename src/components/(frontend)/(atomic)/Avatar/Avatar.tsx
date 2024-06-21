import Image from "next/image";

export default function Avatar({ link, alt, dimensions }: { link: string, alt: string, dimensions?: number | string }) {
    return (
        <span className={`relative aspect-square rounded-full overflow-hidden bg-neutral-500/15 ${dimensions ? `w-${dimensions} h-${dimensions}` : "w-9 h-9"}`}>
            <Image src={link} alt={alt} width={200} height={200} unoptimized priority decoding="async" draggable={false} className="object-cover w-full h-full" />
        </span>
    )
}