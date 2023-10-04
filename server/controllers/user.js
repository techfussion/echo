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
  } catch (err) {}
};
