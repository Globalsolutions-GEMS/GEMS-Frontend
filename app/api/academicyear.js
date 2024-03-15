import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const createAcademicAcademicYear = (academicAcademicYear) => apiClient.post('/academicAcademicYear',academicAcademicYear)

export const getAcademicAcademicYear = () => apiClient.get('/academicAcademicYear')

export const updateAcademicAcademicYear = (id,academicAcademicYear) => apiClient.put(`/academicAcademicYear/${id}`,academicAcademicYear)
