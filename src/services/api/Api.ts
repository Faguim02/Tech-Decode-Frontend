import axios from 'axios'
import Cookies from 'cookies-ts'

export default class Api {
    private adminCookie = new Cookies().get('admin_token')

    public user = axios.create({
        baseURL: 'http://localhost:8080/',
    })

    public admin = axios.create({
        baseURL: 'http://localhost:8080/',
        headers: {
            Authorization: `Bearer ${this.adminCookie}`
        }
    })
}