import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


const blogs = [{title : "Sample Blog", author : "Arun", content : "Nothing much to say, as it's just a sample content."}];

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
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
        path : "/view"
    });
});

app.post("/submit", (req, res) => {
    const { title, author, content } = req.body;
    blogs.push({ title, author, content }); // Push an object with title, author, and content properties
    console.log(blogs);
    res.redirect("/view");
} );

app.post("/update", (req, res)=> {
    console.log(req.body);
    res.render("update.ejs", req.body);
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});