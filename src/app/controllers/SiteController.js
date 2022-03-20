const res = require("express/lib/response");
const Products = require("../../models/Product")
class SiteController {
  index(req, res, next) {
     Products.find({}, function(err, products){
      if(!err){
        products = products.map((product) => product.toObject());
        res.render("site",{products});
        // res.json(products);

      }else{
        res.status(400).json({error: 'ERROR!!!'});
      }
    });
    // Products.find({})
    //   .then((products) => {
    //     products = products.map((product) => product.toObject());
    //     // res.render("home", { products });
    //     res.json(products);
        
    //   })
    //   .catch(next);
    // res.render("home");
  }

  search(req, res) {
    res.render("search");
  }
  giohang(req, res) {
    res.render("giohang");
  }
}

module.exports = new SiteController();
