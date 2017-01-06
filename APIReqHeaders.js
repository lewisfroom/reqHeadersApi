var express = require("express");
var app = express();
app.get("/whoami", function(req,res){
    res.set("Content-Type", "application/json");
    var userAgent = /\((.*?)\)/g.exec(req.headers["user-agent"])[0].replace("(","").replace(")", "");
    var ipAddr = req.headers["x-forwarded-for"];
    var lang = req.headers["accept-language"].split(",")[0];
    res.send(JSON.stringify({"ipaddress":ipAddr, "language":lang, "software":userAgent}));
});
app.listen(process.env.PORT, process.env.IP);
