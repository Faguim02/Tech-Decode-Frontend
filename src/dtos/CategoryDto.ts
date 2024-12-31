import { postDto } from "./PostDto"

export type categoryDto = {
    id?: string,
    title?: string,
    name?: string,
    postModels?: postDto[]
}