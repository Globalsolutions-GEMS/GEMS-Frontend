import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const createConcession = (concession) => apiClient.post('/concession',concession)

export const getConcession = () => apiClient.get('/concession')

export const updateConcession = (id,concession) => apiClient.put(`/concession/${id}`,concession)