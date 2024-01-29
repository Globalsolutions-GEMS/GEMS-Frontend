import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8080"
});

export const uploadImages = (photoFile, signFile) => {
    const formData = new FormData();
    formData.append('photo', photoFile);
    formData.append('sign', signFile);

    return apiClient.post('/uploadphotosign', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};