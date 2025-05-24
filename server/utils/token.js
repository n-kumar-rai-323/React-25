const JWT = require("jsonwebtoken")



const genToken =(data)=>{
return JWT.sign(data, process.env.JWT_SECRET,{
    expiresIn:process.env.JWT_DURATION
});
}

const compareToken=(token)=>{
return JWT.verify(token, process.env.JWT_SECRET)
}

module.exports ={genToken, compareToken}