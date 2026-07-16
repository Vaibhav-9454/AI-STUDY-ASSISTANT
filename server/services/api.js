import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api"
});

export const generateStudyKit = async (notes) => {
    const response = await api.post("/ai/generate", {
        notes
    });

    return response.data.data;
};