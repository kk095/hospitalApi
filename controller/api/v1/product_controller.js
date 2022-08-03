const Product = require("../../../model/products");

module.exports.products = async function (req, res) {
  try {
    let products = await Product.find({});
    return res.status(200).json({
      message: "list of products",
      data: {
        products,
      },
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error",
      err,
    });
  }
};

module.exports.prod_create = async function (req, res) {
  try {
    let product = await Product.create(req.body);
    return res.status(200).json({
      message: "successfully added product!",
      data: {
        product,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "internal server error",
      err,
    });
  }
};

module.exports.prod_remove = async function (req, res) {
  try {
    let product = await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      data: {
        message: "successfully deleted ",
      },
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

module.exports.update = async function (req, res) {
  try {
    let product = await Product.findByIdAndUpdate(req.params.id, {
      quantity: req.query.number,
    });
    console.log("prod :", product);
    return res.status(200).json({
      message: "successfully updated!",
      data: {
        product,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "not deleted ",
      err,
    });
  }
};
