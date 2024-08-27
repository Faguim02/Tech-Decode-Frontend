import { commentDto } from "../../dtos/ComentDto";
import Api from "./Api";

export default class CommentService {

    private user = new Api().user;

    async createComment(data: commentDto): Promise<commentDto> {
        const dataRes = await this.user.post(`comment`, data);

        return dataRes.data;
    }
}