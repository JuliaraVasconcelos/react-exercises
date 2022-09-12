import api from "../Common/api";

const getAllToys = () => api.get("/toys/getAll/");

const exportedObject = {
    getAllToys,
};
export default exportedObject;
