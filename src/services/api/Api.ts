import axios from 'axios'
import Cookies from 'cookies-ts'

export default class Api {
    private adminCookie = new Cookies().get('token')

    public user = axios.create({
        baseURL: '/api',
    })

    public admin = axios.create({
        baseURL: '/api',
        headers: {
            Authorization: `Bearer ${this.adminCookie}`
        }
    })
}