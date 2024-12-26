import { commentDto } from "./ComentDto";

export type postDto = {
    id: string;
    title: string;
    date_at: string,
    bannerUrl: string,
    description?: string,
    comments?: commentDto[],
    font?: string
}