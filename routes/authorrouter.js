var express=require('express')
const router=express.Router();
var authorarray=[
    {
        
        author:"Tolstoy",
        dob:"9-sept-1828 to 20-nov-1910",
        fam:"war and peace & anna karenina",
        img:"https://lh4.googleusercontent.com/proxy/AobQDNY6NRTHaudOmtXXEyYkBvvgCo-aZ74E2TBe0IM2xgYo1tZO7BNBS6UoAXB0LDh0IyRUAQvX5crTZ3ZUAzg54ijXKAsaUDfd_PMtqGHF0icYaGG2Q_UVME-YJczOMyCSoxAb6AzVslggx-XqmO8=s0-d"
    
    },
    {
       
        author:"Dan Brown",
        dob:"22-june-1964",
        fam:"The Da Vinci Code , Digital Fortress , Angels & Demons",
        img:"http://www.gstatic.com/tv/thumb/persons/489466/489466_v9_ba.jpg"
    
    },
    {
        
        author:"Amish Tripathi",
        dob:"18-oct-1974",
        fam:"Immortals of Meluha , The Oath of the Vayuputras ,",
        img:"http://images.mid-day.com/2013/mar/amish.jpg"
    }
    ];
    
    router.get("/",function(req,res){
        res.render("authors",{pagetitle:"Library",nav:[{link:"/books",title:"BOOKS"},{link:"/authors",title:"AUTHORS"}],authorar:authorarray});
    });
    
    router.get("/:id",function(req,res){
        var id = req.params.id;
        console.log(id);
    res.render("singleauthor",{pagetitle:"Library",nav:[{link:"/books",title:"BOOKS"},{link:"/authors",title:"AUTHORS"}],authorar:authorarray[id]})
    });
    module.exports=router; 