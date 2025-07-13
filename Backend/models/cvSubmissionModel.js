const mongoose = require("mongoose");

const cvSubmissionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    cvUrl: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CvSubmission", cvSubmissionSchema);