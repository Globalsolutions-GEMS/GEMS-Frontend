import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const createAcademicSession = (academicsession) => apiClient.post('/academicsession',academicsession)

export const getAcademicSession = () => apiClient.get('/academicsession')

export const updateAcademicSession = (id,academicsession) => apiClient.put(`/academicsession/${id}`,academicsession)