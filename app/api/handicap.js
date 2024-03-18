import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const createHandicap = (handicap) => apiClient.post('/handicap',handicap)

export const getHandicap = () => apiClient.get('/handicap')

export const updateHandicap = (id,handicap) => apiClient.put(`/handicap/${id}`,handicap)