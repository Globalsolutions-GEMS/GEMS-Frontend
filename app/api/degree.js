import axios from "axios"

const apiClient = axios.create ({
    baseURL: "http://localhost:8080"
})

export const createDegree = (degree) => apiClient.post('/degree' , degree)

export const getDegree = () => apiClient.get('/degree')

export const updateDegree = (id , degree ) => apiClient.put(`/degree/${id}` , degree)