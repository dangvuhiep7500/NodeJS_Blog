const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app){

    app.use('/news',newsRouter);

    app.get('/',siteRouter);
      
    app.get('/search', siteRouter);  

    app.get('/giohang', siteRouter);  

}

module.exports = route;