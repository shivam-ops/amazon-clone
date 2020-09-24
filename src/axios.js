import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-861db/us-central1/api", // THE API URL (CLOUD FUNCTION URL)
});

export default instance;
