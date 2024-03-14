import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const getAllFaculty = () => apiClient.get('/faculty')
export const getAllDegree = () => apiClient.get('/degree')
export const getAllCashbook = () => apiClient.get('/cashbook')

export const getAllBasicCourse = () => apiClient.get('/basiccourse')
export const createBasicCourse = (basiccourse) => apiClient.post('/basiccourse',basiccourse)

export const updateAcademicAcademic Year = (id,academicAcademic Year) => apiClient.put(`/academicAcademic Year/${id}`,academicAcademic Year)