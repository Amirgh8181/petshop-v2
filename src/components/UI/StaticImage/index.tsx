import Image, { StaticImageData } from 'next/image'

interface StaticImageCopmProps {
    img: StaticImageData,
    imgAlt: string,
    imgClass: string
}

const StaticImageCopm = ({ img, imgAlt, imgClass }: StaticImageCopmProps) => {
    return <Image
        src={img}
        alt={imgAlt}
        width={img.width}
        height={img.height}
        className={imgClass}
        quality={100}
        priority={true}
    />

}

export default StaticImageCopm