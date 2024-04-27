import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const createCoursePattern = (coursepattern) => apiClient.post('/coursepattern',coursepattern)

export const getCoursePattern = () => apiClient.get('/coursepattern')

export const updateCoursePattern = (id,coursepattern) => apiClient.put(`/coursepattern/${id}`,coursepattern)