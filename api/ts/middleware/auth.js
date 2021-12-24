"use strict";
const jwt = require("jsonwebtoken");
const config = process.env;
const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send("Error: Missing token for authentication");
    }
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
    }
    catch (error) {
        return res.status(401).send("The token provided is invalid");
    }
    return next();
};
module.exports = verifyToken;
