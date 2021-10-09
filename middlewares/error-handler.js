// eslint-disable-next-line no-unused-vars
const errorHandleMiddleware = async (err, req, res, next) => (
  res.status(500).json({ msg: 'Something Went Wrong, Please Try Again!' })
);

module.exports = errorHandleMiddleware;
