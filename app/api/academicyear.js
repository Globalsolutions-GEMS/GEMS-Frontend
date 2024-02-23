import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://viaduct.proxy.rlwy.net:52235"
})

export const createAcademicSession = (academicsession) => apiClient.post('/academicsession',academicsession)

export const getAcademicSession = () => apiClient.get('/academicsession')

export const updateAcademicSession = (id,academicsession) => apiClient.put(`/academicsession/${id}`,academicsession)
