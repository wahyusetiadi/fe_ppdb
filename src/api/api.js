import axios from "axios";

export const getAllData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/registration");
    console.log("getAllData", response.data.user);
    return response.data.user;
  } catch (err) {
    console.error("error get api", err);
    throw err;
  }
};
