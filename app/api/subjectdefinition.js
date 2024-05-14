import axios from "axios";

const apiClient = axios.create({
    baseURL:'http://localhost:8080'
})

export const createSubjectDefinition = (subjectdefinition) => apiClient.post('/subjectdefinition/create' , subjectdefinition)

export const getSpecificSubjectDefinition = (id) => apiClient.get(`/subjectdefinition/${id}`)

export const getAllSubjectDefinition = () => apiClient.get(`/subjectdefinition`)

export const updateSubjectDefinition = (id , subjectdefinition) => apiClient.put(`/subjectdefinition/update/${id}`,subjectdefinition)

export const getAllSubject = () => apiClient.get(`/subject/all`)

export const getAcademicSession = () => apiClient.get('/academicsession')