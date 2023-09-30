import axios from "axios"


export const API = {

        getNews() {
                return axios.get(`https://buildingwebsiteserver-production.up.railway.app/news`
                ).then(response => {
                        return response.data
                })
        },
        getState() {
                return axios.get(`https://buildingwebsiteserver-production.up.railway.app/app`
                ).then(response => {
                        return response.data
                })
        },
        login(password) {
                return axios.post('https://buildingwebsiteserver-production.up.railway.app/login',
                        { password }).then(response => {
                                return response

                        })
        },
        setNews(token, newJson) {
                return axios.post(`https://buildingwebsiteserver-production.up.railway.app/news`,
                        { token, newJson }).then(response => {
                                return response.data
                        })
        },
        sendMessage(message) {
                debugger
                return axios.post(`https://buildingwebsiteserver-production.up.railway.app/message`,
                        { message }).then(response => {
                                return response.data
                        })
        },
        delMessage(token, id) {
                debugger
                return axios.post(`https://buildingwebsiteserver-production.up.railway.app/del_message`,
                        { token, id }).then(response => {
                                return response.data
                        })
        },
        getMessage(token) {

                return axios.post(`https://buildingwebsiteserver-production.up.railway.app/get_message`,
                        { token }).then(response => {
                                return response.data
                        })

        },
}