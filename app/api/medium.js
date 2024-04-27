import axios from "axios";

const apiClient = axios.create({
    baseURL:'http://localhost:8080'
})


export const createMedium = (medium) => apiClient.post('/medium',medium)

export const getMedium = () => apiClient.get('/medium')

export const updateMedium = (id,medium) => apiClient.put(`/medium/${id}`,medium)

