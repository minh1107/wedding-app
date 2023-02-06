import axios from "axios"

const url = process.env.REACT_APP_SERVER_URL
export const apiLoginUser = async (data) => {
    try {
        const response = await axios.post(`${url}/auth/login`, data)
        return response.data        
    } catch (error) {
        console.log(error)
    }

}
