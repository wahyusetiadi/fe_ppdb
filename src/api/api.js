import axios from "axios";
const API_URL = "http://localhost:3000";

export const getAllData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/registration");
    console.log("getAllData", response.data);
    return response.data;
  } catch (err) {
    console.error("error get api", err);
    throw err;
  }
};

export const getDataById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/registration/${id}`);
    console.log("Get Data By ID", response.data);
    return response.data;
  } catch (error) {
    console.error("Error GET API");
    throw error;
  }
};

export const createDataRegistration = async (payload) => {
  try {
    const response = await axios.post(
      `${API_URL}/registration/create`,
      payload
    );
    return response.data;
  } catch (err) {
    console.error("error get api", err);
    throw err;
  }
};

export const editDataRegistration = async (id, data) => {
  try {
    const response = await axios.put(
      `${API_URL}/registration/edit/${id}`,
      data
    );
    console.log("Edit data", response.data);
    return response.data;
  } catch (err) {
    console.error("error updating registration data", err);
    throw err;
  }
};

export const deleteDataRegistration = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/registration/delete/${id}`);
    return response.data;
  } catch (err) {
    console.error("error delete data", err);
    throw err;
  }
};
