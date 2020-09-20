const jwt = require('jsonwebtoken');

exports.isAuthenticated = async (req, res, next) => {
    const token = req.header('Authorization');
    try {
        const verified = await jwt.verify(token, process.env.SECRET)
        next()
    } catch (error) {
        return res.status(400).json({ error: "Access Denied" });
    }
}