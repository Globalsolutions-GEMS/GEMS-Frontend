import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})


export const createCashBook = (cashbook) => apiClient.post('/cashbook' , cashbook)

export const getCashBook = ()=> apiClient.get('/cashbook')

export const updateCashBook = (id,cashbook) => apiClient.put(`/cashbook/${id}`, cashbook)