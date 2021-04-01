const express = require('express')
const bodyParser=require("body-parser");

const app = express()

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  
    var today=new Date();
   // var currentDay=today.getDay();
   var day="";
    // if(today.getDay()===6 || today.getDay()===0)
    // {
    //     // res.send("<h1>Yay it's the weekend.</h1>");
    //     day="Weekend";  
    // }
    // else
    // {
    //     // res.write("<h1>It is not the weekend.</h1>");
    //     // res.write("I have to work");
        
    //     // res.sendFile(__dirname+"/index.html");
    //     day="WeekDay";
    // }

    switch(today.getDay())
    {
        case 0:
            day="Sunday";
            break;
        case 1:
            day="Monday";
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="Wednesday";
            break;
        case 4:
            day="Thursday";
            break;
        case 5:
            day="Friday";
            break;
        case 6:
            day="Saturday";
            break;
        default:
            console.log("Error:current day is equal to: "+today.getDay());
    }

    res.render("list",{kindOfDay: day});
});
 
app.listen(3000,function(){
    console.log("Server starting on port 3000");
});