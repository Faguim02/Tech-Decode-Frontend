import { ErrorMessageDto } from "../../dtos/ErrorMessageDto";
import { postDto } from "../../dtos/PostDto";
import Api from "./Api";

export default class PostService {

    private userAutenticated = new Api().userAuthenticated;
    private userAll = new Api().userAll;

    async createPost(data: postDto, image: File): Promise<boolean | ErrorMessageDto> {

        const formData = new FormData();
        formData.append('photo', image);
        formData.append('title', data.title);
        formData.append('description', data.description || '');
        formData.append('category_id', data.category?.id || '');
        formData.append('font', data.font || '');

        try {
            
            await this.userAutenticated.post('post', formData);

            return {status: 201} as ErrorMessageDto;

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
                    message: "você não tem permissão para fazer isso",
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

    async findAllPosts(): Promise<postDto[]> {
        const dataRes = await this.userAll.get('post');

        return dataRes.data
    }

    async findOnePost(id: string): Promise<postDto> {
        const dataRes = await this.userAll.get(`post/${id}`);

        return dataRes.data;
    }

    async findByCategory(category_id: string): Promise<postDto> {
        const dataRes = await this.userAll.get(`post/category/${category_id}`);

        return dataRes.data;
    }

    async editPost(id: string, data: postDto): Promise<postDto> {
        const dataRes = await this.userAutenticated.put(`post/${id}`, data);

        return dataRes.data;        
    }

    async deletePost(id: string): Promise<ErrorMessageDto> {
        try {
            await this.userAutenticated.delete(`post/${id}`);

            return {
                status: 200,
                title: "Noticia deletada com sucesso",
                message: "A noticia foi deletada com sucesso"
            } as ErrorMessageDto;
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
                    message: "você não tem permissão para fazer isso",
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

    async searchPosts(search: string) {
        try {
            const dataRes = await this.userAll.get(`post/search/${search}`);

            if(dataRes.status == 404) {
                throw new Error()
            }

            return dataRes.data;
        } catch (error: any) {
            console.log()
            return error.response.status
        }
    }
}