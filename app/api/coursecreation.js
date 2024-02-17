import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const getBasicCourse = ()=> apiClient.get('/basiccourse')
export const getCoursePattern = ()=> apiClient.get('/coursepattern')
export const getFeePattern = ()=> apiClient.get('/feepattern')

export const createCourse = (coursecreation) => apiClient.post('/coursecreation' , coursecreation)

