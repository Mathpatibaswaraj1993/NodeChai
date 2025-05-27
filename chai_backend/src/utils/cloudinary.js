import { v2 as cloudinary } from 'cloudinary'
import fs from "fs"



cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRETE
});

const uploadOnCloudinary = async (localFilepath) => {
    try {
        if (!localFilepath) return null
        //upload the file on cloudinary
        cloudinary.uploader.upload(localFilepath, {
            resource_type: "auto"
        })
        //file has been uploaded successfull
        console.log("file os uploaded on cloudinary",
            response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilepath)
        // remove the locally saved temporary file as the upload operation got failed
        return null;

    }
}

export { uploadOnCloudinary }