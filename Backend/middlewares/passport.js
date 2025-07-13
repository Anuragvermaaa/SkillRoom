// const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const userModel = require("../models/userModel");
// const clientModel = require("../models/clientModel");

// passport.use(
//   "google-user",
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "http://localhost:5000/users/google/callback",
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         console.log("[passport] Google user profile:", profile);
//         let user = await userModel.findOne({ googleId: profile.id });
//         if (!user) {
//           user = await userModel.findOne({ email: profile.emails[0].value });
//           if (user) {
//             user.googleId = profile.id;
//             await user.save();
//           } else {
//             user = await userModel.create({
//               googleId: profile.id,
//               email: profile.emails[0].value,
//               name: profile.displayName,
//               password: "", // No password for Google users
//             });
//           }
//         }
//         return done(null, user);
//       } catch (error) {
//         console.error("[passport] Error in google-user strategy:", error);
//         return done(error, null);
//       }
//     }
//   )
// );

// passport.use(
//   "google-client",
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "http://localhost:5000/business/google/callback",
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         console.log("[passport] Google client profile:", profile);
//         let client = await clientModel.findOne({ googleId: profile.id });
//         if (!client) {
//           client = await clientModel.findOne({ email: profile.emails[0].value });
//           if (client) {
//             client.googleId = profile.id;
//             await client.save();
//           } else {
//             client = await clientModel.create({
//               googleId: profile.id,
//               email: profile.emails[0].value,
//               businessName: profile.displayName,
//               password: "", // No password for Google clients
//             });
//           }
//         }
//         return done(null, client);
//       } catch (error) {
//         console.error("[passport] Error in google-client strategy:", error);
//         return done(error, null);
//       }
//     }
//   )
// );

// passport.serializeUser((user, done) => {
//   console.log("[passport] Serializing user/client:", user._id);
//   done(null, { id: user._id, type: user.googleId ? (user.email ? "user" : "client") : "unknown" });
// });

// passport.deserializeUser(async (obj, done) => {
//   try {
//     const Model = obj.type === "user" ? userModel : clientModel;
//     const entity = await Model.findById(obj.id);
//     done(null, entity);
//   } catch (error) {
//     console.error("[passport] Error in deserializeUser:", error);
//     done(error, null);
//   }
// });

// module.exports = passport;