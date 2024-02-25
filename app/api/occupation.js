import axios from "axios";

const apiClient = axios.create({
    baseURL:'http://localhost:8080'
})


export const createOccupation = (occupation) => apiClient.post('/occupation',occupation)

export const getOccupation = () => apiClient.get('/occupation')

export const updateOccupation = (id,occupation) => apiClient.put(`/occupation/${id}`,occupation)

