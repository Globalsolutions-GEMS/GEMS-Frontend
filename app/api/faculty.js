import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const createFaculty = (faculty) => apiClient.post('/faculty' , faculty)

export const getFaculty = ()=> apiClient.get('/faculty')

export const updateFaculty = (id,faculty) => apiClient.put(`/faculty/${id}`, faculty)