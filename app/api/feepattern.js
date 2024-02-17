import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})


export const createFeePattern = (feepattern) => apiClient.post('/feepattern' , feepattern)

export const getFeePattern = ()=> apiClient.get('/feepattern')

export const updateFeePattern = (id,feepattern) => apiClient.put(`/feepattern/${id}`, feepattern)