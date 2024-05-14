import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})


// export const createFeehead = (feehead) => apiClient.post('/feehead',feehead)

export const createFeehead = (feeheadData) => apiClient.post('/feehead',feeheadData)
export const getCashbook = () => apiClient.get('/cashbook')
export const getAllFeehead = () => apiClient.get('/feehead')