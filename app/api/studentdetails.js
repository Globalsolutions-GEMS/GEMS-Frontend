import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})
export const getTitles = () => apiClient.get('/title')
export const createDetails = (details) => apiClient.post('/studentdetails',details)
export const getDetails = () => apiClient.get('/studentdetails')
export const updateDetails = (id,details) => apiClient.put(`/studentdetails/${id}`,details)
