import { storage } from "../../Firebase/config"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"


export const uploadImage = async (file, id)=>{
    try {
        const storageRef = ref(storage, id)
        await uploadBytes(storageRef, file)
        const url = getDownloadURL(storageRef)
        return url
        
    } catch (error) {
        console.log(error)
    }
}

export const uploadImages = async (file, id)=>{
    try {
        const storageRef = ref(storage, id)
        await uploadBytes(storageRef, file)
        const url = getDownloadURL(storageRef)
        return url
    } catch (error) {
        console.log(error)
    }
}