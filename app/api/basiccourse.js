import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080"
})

export const getAllFaculty = () => apiClient.get('/faculty')
export const getAllDegree = () => apiClient.get('/degree')
export const getAllCashbook = () => apiClient.get('/cashbook')


export const getAllBasicCourse = () => apiClient.get('/programmes')
//export const createBasicCourse = (basicCourseData) => apiClient.post('/programme/create',basicCourseData)

export const createBasicCourse = async (formData) => {
    try {
      const response = await axios.post('/programme/create', formData);
      return response.data;
    } catch (error) {
      throw error; 
    }
  };


// export const getAllBasicCourse = () => apiClient.get('/basiccourse')
// export const createBasicCourse = (basiccourse) => apiClient.post('/basiccourse',basiccourse)

//export const updateAcademicAcademicYear = (id,academicAcademicYear) => apiClient.put(`/academicAcademic Year/${id}`,academicAcademicYear)