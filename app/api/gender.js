import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const createGender = (gender) => apiClient.post('/gender',gender)

export const getGender = () => apiClient.get('/gender')

export const updateGender = (id,gender) => apiClient.put(`/gender/${id}`,gender)