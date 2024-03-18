import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})


export const createYear = (year) => apiClient.post('/year' , year)

export const getYear = ()=> apiClient.get('/year')

export const updateYear = (id,year) => apiClient.put(`/year/${id}`, year)

/////////

export const createSemester = (semesterData) => apiClient.post(`/year/${semesterData.YearID}/semester`, semesterData)
// export const createSemester = (semesterData) => {
//     return apiClient.post(`/year/${semesterData.YearID}/semester`, semesterData);
// };
//export const createSemester = (semester) => apiClient.post('/semester' , semester)

export const getSemester = ()=> apiClient.get('/semester')