import { categoryDto } from "../../dtos/CategoryDto"
import { ErrorMessageDto } from "../../dtos/ErrorMessageDto";
import Api from "./Api"

export class CategoryService {
  async findAllCategories(): Promise<categoryDto[] | null> {
    try {
        
        const response = await new Api().user.get('category')
        return response.data;

    } catch (error: any) {

        return null;
        
    }
  }

  async createCategory(data: categoryDto): Promise<boolean | ErrorMessageDto> {
    try {
        
        const response = await new Api().admin.post('category', data)
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