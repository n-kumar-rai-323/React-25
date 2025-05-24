// secure.js
const bcrypt = require("bcryptjs");
const { compareToken } = require("../utils/token");

const genHash = (text) => {
  return bcrypt.hashSync(text, Number(process.env.SALT_ROUND));
};

const compareHash = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

const secureAPI = (sysRole = []) => {
  return (req, res, next) => {
    // CHANGE 2: Look for 'authorization' header (lowercase)
    const authorizationHeader = req.headers.authorization;
    console.log("Authorization Header:", authorizationHeader);

    if (!authorizationHeader) {
      return next(new Error("Authorization Token not found")); // More descriptive error
    }

    // CHANGE 3: Extract the actual token string (remove "Bearer ")
    const tokenParts = authorizationHeader.split(" ");
    if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
      return next(new Error("Invalid Authorization header format"));
    }
    const access_token = tokenParts[1];

    try {
      const tokenData = compareToken(access_token); // Use the extracted token
      console.log(tokenData);
      req.user = tokenData;
      next();
    } catch (err) {
      return next(new Error("Invalid or expired token"));
    }
  };
};
module.exports = { genHash, compareHash, secureAPI };
