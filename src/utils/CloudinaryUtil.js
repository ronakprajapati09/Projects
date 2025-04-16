
// // const cloundinary = require("cloudinary").v2;


// // const uploadFileToCloudinary = async (file) => {

// //     //conif
// //         cloundinary.config({
// //         cloud_name:"dq2bbyfd1",
// //         api_key:"363254229495726",
// //         api_secret:"deJIU1bL-zPyoyndY0KXksh4FyM"
// //     })

// //     const cloundinaryResponse = await cloundinary.uploader.upload(file.path);
// //     return cloundinaryResponse;



// // };
// // module.exports = {
// //     uploadFileToCloudinary
// // }

// const cloudinary = require("cloudinary").v2;
// const streamifier = require("streamifier");

// // Cloudinary configuration (move this outside the function to avoid reconfiguring every time)
// cloudinary.config({
//     cloud_name: "dq2bbyfd1",
//     api_key: "363254229495726",
//     api_secret: "deJIU1bL-zPyoyndY0KXksh4FyM",
// });

// const uploadFileToCloudinary = (buffer) => {
//     return new Promise((resolve, reject) => {
//         const stream = cloudinary.uploader.upload_stream(
//             { folder: "transactions" }, // Save inside "transactions" folder
//             (error, result) => {
//                 if (error) reject(error);
//                 else resolve(result);
//             }
//         );
//         streamifier.createReadStream(buffer).pipe(stream);
//     });
// };

// module.exports = { uploadFileToCloudinary };


const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "dq2bbyfd1",
    api_key: "363254229495726",
    api_secret: "deJIU1bL-zPyoyndY0KXksh4FyM",
});

const uploadFileToCloudinary = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file.path);
        return result.secure_url;  // Return only the URL
    } catch (error) {
        console.error("Cloudinary Upload Error:", error);
        throw error;
    }
};

module.exports = { uploadFileToCloudinary };
