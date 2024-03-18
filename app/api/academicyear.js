import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const createAcademicYear = (academicYear) => apiClient.post('/academicsession',academicYear)

export const getAcademicYear = () => apiClient.get('/academicsession')

export const updateAcademicYear = (id,academicYear) => apiClient.put(`/academicsession/${id}`,academicYear)
