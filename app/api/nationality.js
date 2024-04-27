import axios from "axios";

const apiClient = axios.create({

    baseURL: "http://localhost:8080"
})

export const createNationality = (nationality) => apiClient.post('/nationality', nationality)

export const getNationality = () => apiClient.get('/nationality')

export const updateNationality = (id , nationality) => apiClient.put(`/nationality/${id}`,nationality)

