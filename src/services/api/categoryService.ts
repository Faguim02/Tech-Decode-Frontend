import { categoryDto } from "../../dtos/CategoryDto"
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
}