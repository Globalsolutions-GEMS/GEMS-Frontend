import axios from "axios";

const apiClient = axios.create({
    baseURL:'http://localhost:8080'
})

export const createSubject = (subject) => apiClient.post('/subject/create' , subject)

export const getSpecificSubject = (id) => apiClient.get(`/subject/find/${id}`)

export const getAllSubject = () => apiClient.get(`/subject/all`)