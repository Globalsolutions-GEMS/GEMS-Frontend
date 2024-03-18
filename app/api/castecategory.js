import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})


export const createCasteCategory = (castecategory) => apiClient.post('/castecategory' , castecategory)

export const getCasteCategory = ()=> apiClient.get('/castecategory');

export const updateCasteCategory = (id,castecategory) => apiClient.put(`/castecategory/${id}`, castecategory)

export const createSubCaste = (id,subcaste) => apiClient.post(`/castecategory/${id}/subcaste` , subcaste)

export const getSubCaste = (id)=> apiClient.get(`/castecategory/${id}/subcaste`);

export const updateSubCaste = (id,subcaste) => apiClient.put(`/castecategory/${id}/subcaste`, subcaste)
