import axios from "axios";
const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const creteCertifcate = (certificate) => apiClient.post('/certificate',certificate)