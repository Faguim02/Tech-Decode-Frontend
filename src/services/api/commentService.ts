import { commentDto } from "../../dtos/ComentDto";
import Api from "./Api";

export default class CommentService {

    private admin = new Api().admin;

    async createComment(data: commentDto): Promise<commentDto> {
        const dataRes = await this.admin.post(`comment`, data);

        return dataRes.data;
    }
}