import axios from "axios";

const API_URL = "https://ppdb.edunex.id/api";
const multipartHeaders = { headers: { "Content-Type": "Multipart/form-data" } };

//read
export const getAllData = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/registration`);
    return data;
  } catch (err) {
    console.error("error fetching all data:", err.message);
    throw err;
  }
};

//edit and detail
export const getDataById = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL}/registration/edit/${id}`);
    return data;
  } catch (err) {
    console.error("Error fetching registration by ID:", err.message);
    throw err;
  }
};

//status
export const getDataByIdStatus = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL}/registration/${id}`);
    return data;
  } catch (err) {
    console.error("Error fetching data status:", err.message);
    throw err;
  }
};

//create
export const createDataRegistration = async (formData) => {
  try {
    const { data } = await axios.post(
      `${API_URL}/registration/create`,
      formData,
      multipartHeaders
    );
    return data;
  } catch (err) {
    console.error("error creating registration data:", err.message);
    throw err;
  }
};

//edit
export const editDataRegistration = async (id, formData) => {
  try {
    const { data } = await axios.put(
      `${API_URL}/registration/edit/${id}`,
      formData,
      multipartHeaders
    );
    return data;
  } catch (err) {
    console.error("error updating registration data:", err.message);
    throw err;
  }
};

//delete
export const deleteDataRegistration = async (id) => {
  try {
    const { data } = await axios.delete(`${API_URL}/registration/delete/${id}`);
    return data;
  } catch (err) {
    console.error("error delete data:", err.message);
    throw err;
  }
};

export const statusDataRegistration = async (id, status) => {
  try {
    const { data } = await axios.put(
      `${API_URL}/registration/${id}/status`,
      { status }, // Mengirim status dalam request body
      { headers: { "Content-Type": "application/json" } } // Pastikan format JSON
    );
    return data;
  } catch (err) {
    console.error("error updating registration status:", err.message);
    throw err;
  }
};
