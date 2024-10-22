const ProductCategory = require("../../../model/product_category/productCategory");


const addProductcategory = async (req, res) => {
  try {
    const data = req.body;
    if (req.files.thumbnail) {
      data.thumbnail = req.files.thumbnail[0].filename;
    }

    const datatoSave = new ProductCategory(data);

    const response = await datatoSave.save();


    res.status(200).json({ message: "Product category added successfully", data: response });

  }
  catch (error) {
    console.log(error)
    res.status(500).json({ message: "internel server error" });

  }
};

const readProductCategory = async (req, res) => {
  try {
    const productCategories = await ProductCategory.find().populate('parent_category', 'name _id');

    const response = productCategories.map((category) => {
      const { ...cat } = category._doc;

      // Check if parent_category exists before accessing its name
      cat.slug = category.parent_category
        ? `${category.parent_category.name}-${category.name}`
        : category.name;

      cat.thumbnail = `${req.protocol}://${req.get('host')}/frank-and-ocks-files/product-category/${category.thumbnail}`;

      return cat;
    });

    res.status(200).json({ message: "success", data: response });

  }
  catch (error) {
    console.log(error)
    res.status(500).json({ message: "internel server error" });

  }
}

const productCategoryByParentCategory = async (req, res) => {
  try {
    const productCategories = await ProductCategory.find(req.params);

    const response = productCategories.map((category) => {
      const { ...cat } = category._doc;

      cat.slug = category.parent_category.name + '-' + category.name;
      cat.thumbnail = `${req.protocol}://${req.get('host')}/fran-and-oak-files/product-category/${category.thumbnail}`
      return cat
    });

    res.status(200).json({ message: 'success', data: response });
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'internal server error' });
  }
}

module.exports = {
  addProductcategory,
  readProductCategory,
  productCategoryByParentCategory
}