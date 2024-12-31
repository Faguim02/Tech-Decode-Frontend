import { postDto } from "./PostDto"

export type commentDto = {
    id?: string,
    username: string,
    comment: string,
    post?: postDto,
    date_at?: string
}