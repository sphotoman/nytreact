const router = require('express').Router();


router.route('/articles')
 .get((req, res) => {
    console.log('router test')
    db.Article.find({}).then(dbArticle => res.json(dbArticle))
    
    .catch(err => res.json(err))
}).post((req, res) => {
console.log(req.body);
    db.Article.create({
    	url: req.body.url, 
    	title: req.body.title, 
    	snippet: req.body.snippet})

    .then(dbArticle => res.json(dbArticle))

    .catch(err => res.json(err))
});