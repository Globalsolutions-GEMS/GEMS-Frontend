import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const createAcademicSession = (academicYear) => apiClient.post('/academicsession',academicYear)

export const getAcademicSession = () => apiClient.get('/academicsession')

export const updateAcademicSession = (id,academicYear) => apiClient.put(`/academicsession/${id}`,academicYear)
