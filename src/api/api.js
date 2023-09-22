import axios from "axios"


export const API = {

    getNews() {
            return axios.get(`https://buildingwebsiteserver-production.up.railway.app/news`
            ).then(response => {
                    return response.data
            })
    },
    login(password) {
        return axios.post('https://buildingwebsiteserver-production.up.railway.app/login', 
        {password}).then(response => {
            return response.data
    })
    },
    setNews(token, newJson) {
        return axios.post(`https://buildingwebsiteserver-production.up.railway.app/news`,
        { token, newJson }).then(response => {
                return response.data
        })
},
}