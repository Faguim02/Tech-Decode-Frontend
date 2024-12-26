import { ErrorMessageDto } from "../../dtos/ErrorMessageDto";
import { userDto } from "../../dtos/userDto";
import Api from "./Api";
import Cookies from 'cookies-ts'

export class UserService {
    private admin = new Api().user;

    public async signIn(userDto: userDto): Promise<boolean | ErrorMessageDto> {
        
        try {
            let token = await this.admin.post('auth/signIn', userDto);

            console.log(token.data)  

            await this.saveCookie(token.data.access_token);

            return true;
        } catch (error: any) {

            if(error.response.status == 403) {
                return {
                    title: "Não autorizado",
                    message: "Email ou senha inválidos",
                    status: 403
                } as ErrorMessageDto
            }

            return false;
        }
    }

    private async saveCookie(token: string): Promise<void> {
        new Cookies().set('token', token)
    }
}