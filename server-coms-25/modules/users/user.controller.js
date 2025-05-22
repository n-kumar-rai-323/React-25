const Modul = require("./user.modul");

const user = (payload) => {
    const {password,...rest}=payload;
  const result = Modul.create(payload);
  return result;
};

module.exports = { user };
