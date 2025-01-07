import axios from 'axios'
import Cookies from 'cookies-ts'

export default class Api {
    private adminCookie = new Cookies().get('token')

    public user = axios.create({
        baseURL: 'http://ec2-54-209-212-173.compute-1.amazonaws.com/',
    })

    public admin = axios.create({
        baseURL: 'http://ec2-54-209-212-173.compute-1.amazonaws.com/',
        headers: {
            Authorization: `Bearer ${this.adminCookie}`
        }
    })
}