import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8080"
})

export const createReligion = (religion) => apiClient.post('/religion',religion)

export const getReligion = () => apiClient.get('/religion')

export const updateReligion = (id ,religion) => apiClient.put(`/religion/${id}` , religion)