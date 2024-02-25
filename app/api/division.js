import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const createSection = (section) => apiClient.post('/section',section)
export const getSection = () => apiClient.get('/section')
export const updateSection = (id,section) => apiClient.put(`/section/${id}`,section)