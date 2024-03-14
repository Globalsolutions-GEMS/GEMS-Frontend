import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const createAcademicAcademic Year = (academicAcademic Year) => apiClient.post('/academicAcademic Year',academicAcademic Year)

export const getAcademicAcademic Year = () => apiClient.get('/academicAcademic Year')

export const updateAcademicAcademic Year = (id,academicAcademic Year) => apiClient.put(`/academicAcademic Year/${id}`,academicAcademic Year)
