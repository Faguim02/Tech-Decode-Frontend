import { categoryDto } from "../../dtos/CategoryDto"
import { ErrorMessageDto } from "../../dtos/ErrorMessageDto";
import Api from "./Api"

export class CategoryService {
  async findAllCategories(): Promise<categoryDto[] | null> {
    try {
        
        const response = await new Api().userAuthenticated.get('category')
        return response.data;

    } catch (error: any) {

        return null;
        
    }
  }

  async createCategory(data: categoryDto): Promise<ErrorMessageDto> {
    try {
        
        await new Api().userAuthenticated.post('/category', data)
        return {
            status: 201,
            title: "Categoria criada com sucesso",
            message: "A categoria foi criada com sucesso"
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

async deleteCategory(id: string): Promise<ErrorMessageDto> {
    try {        
        await new Api().userAuthenticated.delete(`/category/${id}`)
        return {
            status: 200,
            title: "Categoria deletada com sucesso",
            message: "A categoria foi deletada com sucesso"
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
}