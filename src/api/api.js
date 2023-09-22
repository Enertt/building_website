import axios from "axios"


export const API = {

    getNews() {
            return axios.get(`https://buildingwebsiteserver-production.up.railway.app/news`
            ).then(response => {
                    return response
            })
    },
}