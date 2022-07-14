
let express = require("express");
var  app = express();
require('dotenv').config()
app.use("/public", express.static(__dirname + "/publicc"));
app.get("/", function(req, res){
    // res.send("hello world");
    res.sendFile("D:/D drive/SDU_VIJAYAGANAPATHY_IS7584/--PCT SPRINT 71-----/NODE_Local_Server_Ex_01/views/index.html");
})
app.get("/vijay", function(req, res){
    res.send({"data":'i am vijay'});
    // res.sendFile("D:/D drive/SDU_VIJAYAGANAPATHY_IS7584/--PCT SPRINT 71-----/NODE_Local_Server_Ex_01/views/index.html");
})


app.get("/json", function(req, res) {
    let msg = "Hello json";
    if(process.env.MESSAGE_STYLE === "uppercase") {
        msg = msg.toUpperCase();
    }
    res.json({"message": msg});
});

// app.listen(3000, () => {
//     console.log(`Server running at port 3000`)
// })

module.exports = { app }
