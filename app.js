const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const blogRoutes = require("./routes/blogRoutes");

// express app
const app = express();

// Connect to MongoDB
const dbURI =
  "mongodb+srv://deepak:test1234@cluster0.hvqmw27.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));

// listen for requests

// middleware and static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// register view engine
app.set("view engine", "ejs");
// app.set('views', 'myviews');

// mongoose and mongo sandbox routes
app.get("/add-blog", (reqquest, response) => {
  const blog = new Blog({
    title: "new blog 2",
    snippet: "about my new blog",
    body: "more about my new blog",
  });

  blog
    .save()
    .then((result) => {
      response.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/all-blogs", (request, response) => {
  Blog.find()
    .then((result) => {
      response.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/single-blog", (request, response) => {
  Blog.findById("64820e63d7433fd0322059a3").then((result) => {
    response.send(result).catch((err) => {
      console.log(err);
    });
  });
});

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// Blog routes starts from here
app.use("/blogs", blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
