import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

export const retriveAllBanks = () => apiClient.get(`/bank`);

export const retrieveBankApi = (id) => apiClient.get(`/bank/${id}`);

export const updateBankApi = (id, bank) => apiClient.put(`/bank/${id}`, bank);

export const createBankApi = (bank) => apiClient.post(`/bank`, bank);

export const retrieveAccountForBank = (id) => apiClient.get(`/bank/${id}/bankaccount`)

export const createBankAccountforBank = (id, bankAccount) => apiClient.post(`/bank/${id}/bankaccount`,bankAccount) 