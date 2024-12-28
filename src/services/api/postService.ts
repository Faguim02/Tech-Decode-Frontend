import { postDto } from "../../dtos/PostDto";
import Api from "./Api";

export default class PostService {

    private admin = new Api().admin;
    private user = new Api().user;

    async createPost(data: postDto): Promise<postDto> {
        const dataRes = await this.admin.post('post/', data);

        return dataRes.data;
    }

    async findAllPosts(): Promise<postDto[]> {
        const dataRes = await this.user.get('post');

        return dataRes.data
    }

    async findOnePost(id: string): Promise<postDto> {
        const dataRes = await this.user.get(`post/${id}`);

        return dataRes.data;
    }

    async findByCategory(category_id: string): Promise<postDto> {
        const dataRes = await this.user.get(`post/category/${category_id}`);

        return dataRes.data;
    }

    async editPost(id: string, data: postDto): Promise<postDto> {
        const dataRes = await this.admin.put(`post/${id}`, data);

        return dataRes.data;        
    }

    async deletePost(id: string): Promise<any> {
        const dataRes = await this.admin.delete(`post/${id}`);

        return dataRes.data;
    }

    async searchPosts(search: string) {
        try {
            const dataRes = await this.user.get(`post/search/${search}`);

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