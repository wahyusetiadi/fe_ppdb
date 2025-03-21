import axios from "axios";
const API_URL = "http://localhost:3000";


//read
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

//edit and detail
export const getDataById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/registration/edit/${id}`);
    console.log("Get Data By ID", response.data);
    return response.data;
  } catch (error) {
    console.error("Error GET API");
    throw error;
  }
};

//status
export const getDataByIdStatus = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/registration/${id}`);
    console.log("Get Data By ID", response.data);
    return response.data;
  } catch (error) {
    console.error("Error GET API");
    throw error;
  }
};

//create
export const createDataRegistration = async (formData) => {
  try {
    const response = await axios.post(
      `${API_URL}/registration/create`,
      formData, {
        headers: { "Content-Type": "multipart/form-data" }
      }
    );
    return response.data;
  } catch (err) {
    console.error("error get api", err);
    throw err;
  }
};

//edit
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

//delete
export const deleteDataRegistration = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/registration/delete/${id}`);
    return response.data;
  } catch (err) {
    console.error("error delete data", err);
    throw err;
  }
};

export const statusDataRegistration = async (id, status) => {
  try {
    const response = await axios.put(
      `${API_URL}/registration/${id}/status`,
      { status }, // Mengirim status dalam request body
      { headers: { "Content-Type": "application/json" } } // Pastikan format JSON
    );
    return response.data;
  } catch (err) {
    console.error("error status data", err);
    throw err;
  }
};

