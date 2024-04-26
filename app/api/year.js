import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})


export const createYear = (year) => apiClient.post('/year' , year)

export const getYear = ()=> apiClient.get('/year')

export const updateYear = (id,year) => apiClient.put(`/year/${id}`, year)


export const createSemester = (semesterData) => apiClient.post(`/year/${semesterData.YearID}/semester`, semesterData)

export const getSemester = (id,semester)=> apiClient.get(`/year/${id}/semester` , semester)

export const updateSemester = (id,semester) => apiClient.put(`/year/${id}/semester`, semester)

//export const getSemester = ()=> apiClient.get('/semester')