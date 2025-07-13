// const jwt = require("jsonwebtoken");
// const SkillBlacklistToken = require("../models/blackListTokenModel");

// const googleCallback = async (req, res) => {
//   try {
//     console.log("[googleClientController] Client authenticated:", req.client);
//     const token = jwt.sign(
//       { clientId: req.client._id, email: req.client.email },
//       process.env.SKILL_ROOM_JWT_SECRET,
//       { expiresIn: "1h" }
//     );
//     res.redirect(`http://localhost:5173/business/home?token=${token}`);
//   } catch (error) {
//     console.error("[googleClientController] Error in googleCallback:", error);
//     res.redirect("http://localhost:5173/business/login?error=Google authentication failed");
//   }
// };

// module.exports = { googleCallback };