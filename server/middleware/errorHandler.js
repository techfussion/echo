import { customAPIError } from "../errors/customError.js";

const erroHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof customAPIError) {
    return res.status(err.status).json({ msg: err.message });
  }

  return res.status(500).json({ msg: "Something went wrong" });
};

export default erroHandlerMiddleware;
