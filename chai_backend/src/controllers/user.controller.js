import asyncHandler from '../utils/asyncHandler.js';
import { ApiError } from "../utils/AppError.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from '../utils/ApiResponse.js';

// const registerUser = asyncHandler(async (req, res) => {
    //get user details from frontend
    //validation -not empty
    //check if user already exists:username,email
    //check for images,check for avatar
    //upload them to cloudinary,avatar
    //create user object- create entry in db
    //remove password and refresh token field from response
    //check for user creation 
    //return res



    // const { fullName, email, username, password } = req.body
    // console.log("email:", email);
    /*  
     if (fullName === "") {
         throw new ApiError(400,"fullname is required")
     }
 */

    // validation not empty checking

    // if (
    //     [{ fullName, email, username, password }].some(field => typeof field !== 'string' || field.trim() === "")) {
    //     console.log("Request Body:", { fullName, email, username, password });

    //     throw new ApiError(400, "All fields are required")
    // }
    
const registerUser = asyncHandler(async (req, res) => {
    const { fullName, email, username, password } = req.body;

    console.log({ fullName, email, username, password }); // Debug log

    if ([fullName, email, username, password].some(field => typeof field !== 'string' || field.trim() === '')) {
        throw new ApiError(400, "All fields are required");
    }

      
    
    
    //check if user already exists:username,email
    const existedUser = User.findOne({
        $or: [{ username }, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists")
    }

    //check for images,check for avatar
    const avatarLocalPath = req.files?.avatar[0]?.path
    const coverImageLocalPath = req.files?.coverImage[0]?.path

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required")
    }

    //upload them to cloudinary,avatar
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!avatar) {
        throw new ApiError(400, "Avatar file is required")
    }
    //create user object- create entry in db
    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    //remove password and refresh token field from response
    const createdUser = user.findById(user._id).select(
        "-password -refreshToken"
    )

    //check for user creation 
    if (!createdUser) {
        throw new ApiError(500, "something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User Registered  Successfully")
    )

});

export { registerUser };
