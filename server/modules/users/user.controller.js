const Model = require("./user.modul");
const { genHash, compareHash } = require("../../utils/secure");
const { genToken } = require("../../utils/token");

const register = async (payload) => {
  const { password, ...rest } = payload;
  const userExist = await Model.findOne({ email: rest?.email });
  if (userExist) throw new Error("This email has already been taken");
  rest.password = genHash(password);
  const newUser = await Model.create(rest);
  if (!newUser) throw new Error("User registration failed. try again leter.");
  return { data: null, msg: "User register successfully" };
};

const login = async (payload) => {
  const { email, password } = payload;
  const user = await Model.findOne({ email, isActive: true, isBlocked: false });
  if (!user) throw new Error("User not found");
  const isValidPw = compareHash(password, user?.password);
  if (!isValidPw) throw new Error("Username or password did not match");
  const accessToken = {
    name: user?.name,
    email: user?.email,
    roles: user?.roles,
  };
  return genToken(accessToken);
};

module.exports = { register, login };
