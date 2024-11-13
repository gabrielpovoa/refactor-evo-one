import { StaticImageData } from "next/image";

export interface EvoProjectsType  {
    image:StaticImageData | string;
    label_title:string,
    label_subtitle:string,
    description:string;
}