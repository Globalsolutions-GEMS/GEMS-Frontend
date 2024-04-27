import axios from "axios";
const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const createCertificate = (certificate) => apiClient.post('/certificate',certificate)

export const getCertificate = () => apiClient.get('/certificate')

export const updateCertificate = (id,certificate) => apiClient.put(`/certificate/${id}`,certificate)