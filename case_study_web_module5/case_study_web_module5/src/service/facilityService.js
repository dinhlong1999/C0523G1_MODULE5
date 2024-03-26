import axios from "axios";

const URL_TYPE_FACILITY = "http://localhost:8081/typeRent/";
const URL_VILLAS = "http://localhost:8081/villas/";
const URL_HOUSES = "http://localhost:8081/houses/";
const URL_ROOM = "http://localhost:8081/rooms/";

export const getAllTypeRent = async () => {
    try {
        return await axios.get(URL_TYPE_FACILITY);
    } catch (e) {
        console.log(e)
    }
}

export const getAllVilla = async () => {
    try {
        return await axios.get(URL_VILLAS);
    } catch (e) {
        console.log(e)
    }
}

export const getAllRoom = async () => {
    try {
        return await axios.get(URL_ROOM);
    } catch (e) {
        console.log(e)
    }
}

export const getAllHouse = async () => {
    try {
        return await axios.get(URL_HOUSES);
    } catch (e) {
        console.log(e)
    }
}

export const deleteVilla = async (villaID) => {
    try {
        return await axios.delete(URL_VILLAS + villaID)
    } catch (e) {
        console.log(e)
    }
}
export const deleteRoom = async (roomID) => {
    try {
        return await axios.delete(URL_ROOM + roomID)
    } catch (e) {
        console.log(e)
    }
}
export const deleteHouse = async (houseID) => {
    try {
        return await axios.delete(URL_HOUSES + houseID)
    } catch (e) {
        console.log(e)
    }
}
export const createVilla = async (villa) => {
    try {
        return await axios.post(URL_VILLAS, villa)
    } catch (e) {
        console.log(e)
    }
}
export const createRoom = async (room) => {
    try {
        return await axios.post(URL_ROOM, room)
    } catch (e) {
        console.log(e)
    }
}
export const createHouse = async (house) => {
    try {
        return await axios.post(URL_HOUSES, house)
    } catch (e) {
        console.log(e)
    }
}

export const getHouseByID = async (id) =>{
    try {
        return await axios.get(URL_HOUSES+id)
    }catch (e){
        console.log(e)
    }
}
export const getRoomByID = async (id) =>{
    try {
        return await axios.get(URL_ROOM+id)
    }catch (e){
        console.log(e)
    }
}
export const getVillaByID = async (id) =>{
    try {
        return await axios.get(URL_VILLAS+id)
    }catch (e){
        console.log(e)
    }
}
export const editHouse = async (house) =>{
    try {
        return await axios.put(URL_HOUSES+house.id,house)
    }catch (e) {
        console.log(e)
    }
}
export const editVilla = async (villa) =>{
    try {
        return await axios.put(URL_VILLAS+villa.id,villa)
    }catch (e) {
        console.log(e)
    }
}
export const editRoom = async (room) =>{
    try {
        return await axios.put(URL_ROOM+room.id,room)
    }catch (e) {
        console.log(e)
    }
}