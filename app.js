var express=require('express')
var app=express();
const path=require('path')
var bookrouter=require('./routes/bookrouter')
var authorrouter=require('./routes/authorrouter')
app.use("/authors",authorrouter)
app.use("/books",bookrouter)
app.set("view engine","ejs");
app.set("views","./src/views")
app.use(express.static(path.join(__dirname,"/public")));
app.get("/",function(req,res){
    res.render("index",{pagetitle:"Library",nav:[{link:"/books",title:"BOOKS"},{link:"/authors",title:"AUTHORS"}]});
});
app.listen(process.env.PORT || 8088,function(req,res){
    console.log("server started listening..")
})