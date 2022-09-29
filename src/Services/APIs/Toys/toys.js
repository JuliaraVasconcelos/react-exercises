import api from "../Common/api";

const getAllToys = () => api.get("/toys/getAll/");
const getToysPaginate = (info, token) => api.get("/toys/?" + info, mountHeader(token));
const uploadToysPhoto = (token, data) => api.post("/toys/uploadImage", data, mountHeader(token));
const addToy = (token, data) => api.post("/toys", data, mountHeader(token));
const editToy = (token, data) => api.put("/toys", data, mountHeader(token)); //e se usasse patch?
const deleteToy = (token, toyID) => api.delete("/toys/" + toyID, mountHeader(token)); 


const mountHeader = (token) => {
    return { headers: { 'Authorization': 'Bearer ' + token } }
}

const exportedObject = {
    getAllToys,
    getToysPaginate,
    uploadToysPhoto,
    addToy,
    editToy,
    deleteToy
};
export default exportedObject;