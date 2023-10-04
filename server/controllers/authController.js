import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

/* HANDLES USER REGISTRATION */
export const register = async (req, res) => {
  try {
    const { name, email, password, picture } = req.body;

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      passwordHash,
      picture,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* HANDLES USER LOGGIN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(400).json({ msg: "User does not exist!" });
    }

    const passwordMatch = bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(400).json({ msg: "Invalid Credentials." });
    }

    const token = jwt.sign({ id: user_id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    delete user.password;
    return res.status(200).json({ token, user });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};
