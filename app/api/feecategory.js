import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const cretePayment = (payment) => apiClient.post('/paymenttype',payment)
export const getPayments = () => apiClient.get('/paymenttype')
export const updatePayment = (id,payment) => apiClient.put(`/paymenttype/${id}`,payment)