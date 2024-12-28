import { ErrorMessageDto } from "../../dtos/ErrorMessageDto";
import { userDto } from "../../dtos/userDto";
import Api from "./Api";
import Cookies from 'cookies-ts'

export class UserService {
    private admin = new Api().admin;
    private user = new Api().user;

    public async signIn(userDto: userDto): Promise<boolean | ErrorMessageDto> {
        
        try {
            let token = await this.user.post('auth/signIn', userDto);

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

    public async signUp(userDto: userDto): Promise<boolean | ErrorMessageDto> {
        try {
            await this.user.post('auth/signUp', userDto);

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

    public async signUpAdmin(userDto: userDto): Promise<boolean | ErrorMessageDto> {
        try {
            await this.admin.post('auth/signUp/admin', userDto);

            return true;
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
                    title: "Não autorizado",
                    message: "Você não possui acesso para criar contas de administrador",
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

    private async saveCookie(token: string): Promise<void> {
        new Cookies().set('token', token)
    }
}