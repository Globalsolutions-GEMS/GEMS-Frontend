import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const getAllFaculty = () => apiClient.get('/faculty')
export const getAllDegree = () => apiClient.get('/degree')
export const getAllCashbook = () => apiClient.get('/cashbook')

export const getAllBasicCourse = () => apiClient.get('/basiccourse')
export const createBasicCourse = (basiccourse) => apiClient.post('/basiccourse',basiccourse)

export const updateAcademicSession = (id,academicsession) => apiClient.put(`/academicsession/${id}`,academicsession)