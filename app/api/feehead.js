import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const getCashbook = () => apiClient.get('/cashbook')
export const createFeehead = (feehead) => apiClient.post('/feehead',feehead)
export const getAllFeehead = () => apiClient.get('/feehead')