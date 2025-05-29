import { v2 as cloudinary } from 'cloudinary'
import fs from "fs"


console.log(process.env.CLOUDINARY_CLOUD_NAME, process.env.CLOUIDINARY_API_KEY, process.env.CLOUDINARY_API_SECRETE)
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUIDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRETE
});


const uploadOnCloudinary = async (localFilePath) => {
    try {

        if (!localFilePath) return null;

        if (!fs.existsSync(localFilePath)) {
            console.error("File does not exist at:", localFilePath);
            return null;
        }

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });
        //  file has been uploaded successfully
         console.log("File is uploaded on Cloudinary");
                 
        fs.unlinkSync(localFilePath);
        return response;

    } catch (error) {
        console.error("Cloudinary upload error:", error);
        fs.unlinkSync(localFilePath);
        return null;
    }
}

export { uploadOnCloudinary }