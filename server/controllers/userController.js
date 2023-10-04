import User from "../models/userModel";

export const searchUser = async (req, res) => {
  try {
    const searchKeyword = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $option: "i" } },
            { email: { $regex: req.query.search, $option: "i" } },
          ],
        }
      : {};

    const users = await User.find(searchKeyword).find({
      _id: { $ne: req.user._id },
    });
    res.send(users);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
