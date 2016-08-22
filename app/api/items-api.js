import express from 'express';
import productData from '../product.json';
import {Product} from '../db/schema';
const router = express.Router();

router.post('/', function (req, res, next) {
  Product.find().remove(function (err) {
    if (err) return next(err);

    Product.create(productData, (err, all) => {
      if (err) return next(err);
      console.log('productData is in db --success');
      // res.json(all);
    });
  });
});
export default router;
