import axios from 'axios'
import Cookies from 'cookies-ts'

export default class Api {
    private adminCookie = new Cookies().get('token')
    private baseURL: string = 'https://api.techdecode.com'

    public userAll = axios.create({
        baseURL: this.baseURL,
    })

    public userAuthenticated = axios.create({
        baseURL: this.baseURL,
        headers: {
            Authorization: `Bearer ${this.adminCookie}`
        }
    })
}