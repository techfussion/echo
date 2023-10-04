import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
      //token.toString().slice(7, token.length).trimStart();
    }

    const verifiid = jwt.verify(token, process.env.JWT_SECRET);
    res.user = verifiid;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default verifyToken;
