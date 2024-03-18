import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

export const createMotherTongue = (mothertongue) =>
  apiClient.post("/mothertongue", mothertongue);

export const getMotherTongue = () => apiClient.get("/mothertongue");

export const updateMotherTongue = (id, mothertongue) =>
  apiClient.put(`/mothertongue/${id}`, mothertongue);
