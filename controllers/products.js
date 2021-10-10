const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: 'All Products' });
};

module.exports = { getAllProducts };
