const res = require("express/lib/response");

class NewsController{

    index(req,res){
        res.render('news');
    }

    show(req,res){
        res.send('News Retail')
    }

}

module.exports = new NewsController;