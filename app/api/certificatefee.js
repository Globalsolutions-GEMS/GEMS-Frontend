import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const getAcademicYear = () => apiClient.get('/academicsession')
export const getCashbook = () => apiClient.get('/cashbook')
export const getCertificate = () => apiClient.get('/certificate')
export const getFeeHead = () => apiClient.get('/feehead')
export const getProgramme = () => apiClient.get('/programmes')
export const submitCertFee = (cert) => apiClient.post('/certificatefee',cert)
export const getCertFee = () => apiClient.get('/certificatefees')
export const updateCertFee = (id,certFee) => apiClient.put(`/certificatefee/${id}`,certFee)
export const getCertFeeFilter = (academicSessionId) => 
    apiClient.get('/certificatefee/academicSesion',{
        params:{
            academicSessionId
        },
    }
)