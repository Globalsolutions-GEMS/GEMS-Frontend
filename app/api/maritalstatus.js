import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const createMaritalStatus = (maritalstatus) => apiClient.post('/maritalstatus',maritalstatus)

export const getMaritalStatus = () => apiClient.get('/maritalstatus')

export const updateMaritalStatus = (id,maritalstatus) => apiClient.put(`/maritalstatus/${id}`,maritalstatus)