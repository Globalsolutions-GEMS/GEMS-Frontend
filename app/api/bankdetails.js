import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const getBanks = () => apiClient.get('/bank')

export const createBank = (bank) => apiClient.post('/bank',bank)

export const updateBank = (id,bank) => apiClient.put(`/bank/${id}`, bank)