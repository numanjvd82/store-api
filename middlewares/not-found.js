// eslint-disable-next-line no-unused-vars
const notFound = (req, res, next) => res.status(404).send('Route Do Not Exist!');

module.exports = notFound;
