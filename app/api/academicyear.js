import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const createAcademicYear = (academicYear) => apiClient.post('/academicYear',academicYear)

export const getAcademicYear = () => apiClient.get('/academicYear')

export const updateAcademicYear = (id,academicYear) => apiClient.put(`/academicYear/${id}`,academicYear)
