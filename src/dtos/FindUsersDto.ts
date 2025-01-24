import { userDto } from "./userDto"

export type findAllUsersDto = {
    users: userDto[],
    size: number
}