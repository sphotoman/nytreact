const express = require("express");
const bodyParser = require("body-parser");
// const logger = require("morgan");
const mongoose = require("mongoose");

//listen on port
var port = process.env.PORT || 3000;
//Initialize Express
var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));



// require all models
const db =  require("./src/models");

var routes = require("./routes/routes.js");
app.use("/routes", routes);

// Middleware
// app.use(logger("dev"));
app.use(bodyParser.json());
// app.use(express.static("public"));

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/NYTreact", {
});


//routes

// app.get("/articles", (req, res) => {
    
//     db.Article.find({}).then(dbArticle => res.json(dbArticle))
    
//     .catch(err => res.json(err))
// });

// app.post("/articles", (req, res) => {
// console.log(req.body);
//     db.Article.create({
//     	url: req.body.url, 
//     	title: req.body.title, 
//     	snippet: req.body.snippet})

//     .then(dbArticle => res.json(dbArticle))

//     .catch(err => res.json(err))
// });



//  	res.render("index", {tester: '309'});
// 	// res.render("./layouts/main", {homeClass: 'class="active"'});
// 	// res.render("./layouts/main", {listClass: 'class=""'});
// });

// app.get("/list", function(req, res, next) {
// 	res.render("list", {tester: '520'});
// 	// res.render ("./layouts/main", {listClass: 'class="active"'});
// 	// res.render ("./layouts/main", {homeClass: 'class=""'});
// });

// app.get("/scrape", function(req, res){
// 	console.log("i am scraping");
// 	request("https://www.nytimes.com/", function(error, response, html){
// 		var $ = cheerio.load(html);

// 		var results = [];
// 		// console.log($);
// 		$("article.story").each(function(i, element) {
// 			var url =$(element).children("h2.story-heading").children("a").attr("href");
// 			var headline =$(element).children("h2.story-heading").children("a").text().trim();
// 			var summary =$(element).children("p.summary").text().trim();

// 			// console.log(i);
// 			// console.log("URL for article " + url);
// 			// console.log("headline for Article ", headline);
// 			// console.log("Summary: ", summary);

// 			var article = {
// 				url: url,
// 				headline: headline,
// 				summary: summary
// 				};

// 			var entry = new db.Article(article);
// 			entry.save(function(error, data){
// 				if (error) console.log(error)
// 					// console.log(data)
// 			});

// 		// console.log("consolidated: ", article);
// 		// res.render("index", article);
// 		});
// 	db.Article.find({}).populate("note").exec(function(error, data){
// 			if (error) console.log(error)
// 						console.log(data)
// 					res.render("index", {
// 						scrape:data
// 					})
// 		})
// 	});

// });

// Initiate the listener.
app.listen(port);
console.log("App running on port " + port + "!");

// app.post("/save/:id", function(req, res) {
//     var id = req.param.id
//     db.Article.update({
//         saved: true,
//         where: {
//             _id: id
//         }
//     }).then(function(err, data) {
// if (err) console.log(err)
// });
// })