// q: what is the purpose of this file?
// a: This file is the entry point of the application. It creates an express server and listens on port 3000. It also defines routes for the application.

import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


const blogs = [{title : "Sample Blog", author : "Arun", content : "Nothing much to say, as it's just a sample content. I'm still figuring out databases, so for time being, your blogs are stored in an in-memory array. But hey, if the server restarts, say goodbye to all your contents."}];

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use((req, res, next)=>{
    res.locals.path = "";
    res.locals.blogs = blogs;
    next();
})


app.get("/", (req,res)=> {
    res.render("index.ejs" , {
        path : "/"
    });
});

app.get("/create", (req, res) => {
    res.render("create.ejs",{
        path : "/create"
    });
});

app.get("/view", (req, res) => {
    res.render("view.ejs", {
        path : "/view",
        blogs : blogs,
    });
});

app.post("/submit", (req, res) => {
    const { title, author, content } = req.body;
    blogs.push({ title, author, content }); // Push an object with title, author, and content properties
    console.log(blogs);
    res.redirect("/view");
} );

app.get("/update", (req, res) => {
    const index = req.query.index;
    const blog = blogs[index];
    res.render("update.ejs",{
        index,
        blog
    });
});

app.post("/update", (req, res)=> {
    const { index, title, author, content } = req.body;
    blogs[index] = { title, author, content };
    res.redirect("/view");
});

app.post("/delete", (req, res) => {
    const index = req.body.index;
    blogs.splice(index,1);
    res.redirect("/view");
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});