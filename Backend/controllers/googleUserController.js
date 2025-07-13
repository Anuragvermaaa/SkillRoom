// const jwt = require("jsonwebtoken");
// const SkillBlacklistToken = require("../models/blackListTokenModel");

// const googleCallback = async (req, res) => {
//   try {
//     console.log("[googleUserController] User authenticated:", req.user);
//     const token = jwt.sign(
//       { userId: req.user._id, email: req.user.email },
//       process.env.SKILL_ROOM_JWT_SECRET,
//       { expiresIn: "1h" }
//     );
//     res.redirect(`http://localhost:5173/users/home?token=${token}`);
//   } catch (error) {
//     console.error("[googleUserController] Error in googleCallback:", error);
//     res.redirect("http://localhost:5173/users/login?error=Google authentication failed");
//   }
// };

// module.exports = { googleCallback };