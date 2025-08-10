import jwt from "jsonwebtoken";

function authenticateToken(req, res, next) {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({ error: "Token verification failed" });
    }
    req.user = user;
    next();
  });
}

export default authenticateToken;
