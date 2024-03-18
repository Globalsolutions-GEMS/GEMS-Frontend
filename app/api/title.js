import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8080"
})

export const createNameTitle = (title) => apiClient.post('/title' , title)

export const getNameTitle = () => apiClient.get('/title')

export const updateNameTitle = (id , title) => apiClient.put(`/title/${id}`,title)