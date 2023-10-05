const invalidRoute = (req, res) =>
  res.status(404).send("API Route Does Not Exist");

export default invalidRoute;
