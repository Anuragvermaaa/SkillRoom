// const CvSubmission = require("../models/cvSubmissionModel");
// const { sendCvSubmissionEmail } = require("../services/emailService");
// const cloudinary = require("../utils/cloudinary");
// const { validationResult } = require("express-validator");

// exports.submitCvSubmission = async (req, res) => {
//   console.log("CV Submission payload:", req.body, req.file);
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   try {
//     const { name, email } = req.body;
//     const file = req.file;

//     if (!file || file.size > 5 * 1024 * 1024) {
//       return res.status(400).json({ message: "Invalid file or exceeds 5MB limit" });
//     }

//     const result = await cloudinary.uploader.upload(file.path, {
//       folder: "cv_submissions",
//       resource_type: "auto",
//     });

//     const cvSubmission = await CvSubmission.create({
//       name,
//       email,
//       cvUrl: result.secure_url,
//     });

//     await sendCvSubmissionEmail({
//       name,
//       email,
//       cvUrl: result.secure_url,
//     });

//     res.status(201).json({
//       message: "CV submission successful",
//       cvSubmission: {
//         _id: cvSubmission._id,
//         name: cvSubmission.name,
//         email: cvSubmission.email,
//         cvUrl: cvSubmission.cvUrl,
//       },
//     });
//   } catch (error) {
//     console.error("CV Submission error:", error.message);
//     res.status(500).json({ message: "Server error" });
//   }
// };

const CvSubmission = require("../models/cvSubmissionModel");
const { sendCvSubmissionEmail } = require("../services/emailService");
const cloudinary = require("../utils/cloudinary");
const { validationResult } = require("express-validator");
const stream = require("stream");

const uploadToCloudinary = (file) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "cv_submissions", resource_type: "auto" },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
    const bufferStream = new stream.PassThrough();
    bufferStream.end(file.buffer);
    bufferStream.pipe(uploadStream);
  });
};

exports.submitCvSubmission = async (req, res) => {
  console.log("CV Submission payload:", req.body, req.file);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "CV file is required" });
    }

    const result = await uploadToCloudinary(file);

    const cvSubmission = await CvSubmission.create({
      name,
      email,
      cvUrl: result.secure_url,
    });

    await sendCvSubmissionEmail({
      name,
      email,
      cvUrl: result.secure_url,
    });

    res.status(201).json({
      message: "CV submission successful",
      cvSubmission: {
        _id: cvSubmission._id,
        name: cvSubmission.name,
        email: cvSubmission.email,
        cvUrl: cvSubmission.cvUrl,
      },
    });
  } catch (error) {
    console.error("CV Submission error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
