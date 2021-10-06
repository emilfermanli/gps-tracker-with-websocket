import axios from "axios"

var url = "https://"+ window.location.hostname +"/api"


export default axios.create({
    baseURL: `${url}`,
    headers: {
        'Accept': "application/json",
    },
});