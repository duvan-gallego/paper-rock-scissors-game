var express = require('express');
var router = express.Router();
var products = require('../data/products.json');

/* GET products listing. */
router.get('/', function(req, res, next) {
  const { page, size, category, searchString } = req.query;

  let filterByCategory = [...products];
  if (category && category !== 'All') {
    let categoryNormaliced = category.charAt(0).toUpperCase() + category.slice(1);
    filterByCategory = products.filter(product => product.categories.includes(categoryNormaliced));
  }

  let filterBySearchString = [...filterByCategory];
  if (searchString) {
    const searchStringInLowerCase = searchString.toLowerCase();
    filterBySearchString = filterByCategory.filter(product =>
      product.name.toLowerCase().includes(searchStringInLowerCase) ||
      product.description.toLowerCase().includes(searchStringInLowerCase) ||
      product.brand.toLowerCase().includes(searchStringInLowerCase)
    );
  }

  const sizeValidated = size || 3;
  const finalProduct = ( (page || 1) * sizeValidated );
  const initialProduct = ( finalProduct - sizeValidated );
  const productsFiltered = filterBySearchString.slice(initialProduct , finalProduct);
  const reponse = {
    data: productsFiltered,
    elementsFetched: productsFiltered.length + (size * (page - 1)),
    totalElements: filterBySearchString.length,
    page
  };
  // Return the products filtered with the params page and size
  res.setHeader('Content-Type', 'application/json');
  /*
  // Use this to test the fetching state
  setTimeout(() => {
    res.end(JSON.stringify(reponse));
  }, 4000);
  */
  res.end(JSON.stringify(reponse));
});

module.exports = router;
