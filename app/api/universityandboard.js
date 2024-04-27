import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8080"
})

export const createUniversityAndBoard = (universityandboard)=> apiClient.post('/universityandboard',universityandboard)

export const getUniversityAndBoard = () => apiClient.get('/universityandboard')

export const updateUniversityAndBoard = (id, universityandboard) => apiClient.put( `/universityandboard/${id}`,universityandboard)