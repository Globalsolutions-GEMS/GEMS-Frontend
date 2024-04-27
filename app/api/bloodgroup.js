import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const createBloodGroup = (bloodGroup) => apiClient.post('/bloodGroup',bloodGroup)

export const getBloodGroup = () => apiClient.get('/bloodGroup')

export const updateBloodGroup = (id,bloodGroup) => apiClient.put(`/bloodGroup/${id}`,bloodGroup)