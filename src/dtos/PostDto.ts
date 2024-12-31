import { categoryDto } from "./CategoryDto";
import { commentDto } from "./ComentDto";

export type postDto = {
    id: string;
    title: string;
    date_at: string,
    bannerUrl: string,
    description?: string,
    comments?: commentDto[],
    category?: categoryDto
    font?: string
}