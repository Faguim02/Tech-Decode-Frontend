import { commentDto } from "../../dtos/ComentDto";
import { ErrorMessageDto } from "../../dtos/ErrorMessageDto";
import Api from "./Api";
import Cookies from "cookies-ts";

export default class CommentService {

    private user = new Api().user;

    async createComment(data: commentDto): Promise<boolean | ErrorMessageDto> {

        try {
            let token = new Cookies().get("token");

            const dataRes = await this.user.post(`comment`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            return true;
            
        } catch (error: any) {

            if(error.response.status == 500) {
                return {
                    title: "Internal Server Error",
                    message: "parece que sua internet não está tão boa",
                    status: 500
                } as ErrorMessageDto
            }

            return {
                title: error.response.data.title,
                message: error.response.data.message,
                status: error.response.status
            } as ErrorMessageDto
        }

    }
}