import { commentDto } from "../../dtos/ComentDto";
import { ErrorMessageDto } from "../../dtos/ErrorMessageDto";
import Api from "./Api";

export default class CommentService {

    private userAuthenticated = new Api().userAuthenticated;

    async createComment(data: commentDto): Promise<ErrorMessageDto> {

        try {

            await this.userAuthenticated.post(`comment`, data);

            return {
                title: "Comentário criado",
                message: "seu comentário foi criado com sucesso",
                status: 201
            } as ErrorMessageDto
            
        } catch (error: any) {

            if(error.response.status == 500) {
                return {
                    title: "Internal Server Error",
                    message: "parece que sua internet não está tão boa",
                    status: 500
                } as ErrorMessageDto
            }

            if(error.response.status == 403) {
                return {
                    title: "forbidden",
                    message: "crie uma conta para comentar",
                    status: 403
                } as ErrorMessageDto
            }

            return {
                title: error.response.data.title,
                message: error.response.data.message,
                status: error.response.status
            } as ErrorMessageDto
        }

    }

    async deleteComment(id: string): Promise<boolean | ErrorMessageDto> {
        
        try {
            await this.userAuthenticated.delete(`comment/${id}`);

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