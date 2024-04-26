import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const getBasicCourse = ()=> apiClient.get('/basiccourse')
export const getCoursePattern = ()=> apiClient.get('/coursepattern')
export const getFeePattern = ()=> apiClient.get('/feepattern')

export const createCourse = (coursecreation) => apiClient.post('/courses/create' , coursecreation)

export const updateCourse = (id,formData) => apiClient.put(`/courses/update/${id}`,formData)

export const getSpecificCourse = (id) => apiClient.get(`/courses/${id}`)

export const getAllCourses = () => apiClient.get(`/courses`)

export const findCourses = (basicCourseId, coursePatternId, feePatternId) =>
  apiClient.get("/courses/find", {
    params: {
      basicCourseId,
      coursePatternId,
      feePatternId,
    },
  });

export const findCoursesbypro = (basicCourseId) =>
  apiClient.get("/courses/coursebyprogramme", {
    params: {
      basicCourseId,
    },
  });


