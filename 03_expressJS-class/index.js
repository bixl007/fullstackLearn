const express = require("express");

const port = 3000;

const app = express();


function sum(n){
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans += i;
        
    }
    return ans;
}

app.get("/", function(req, res){
    const n = req.query.n;
    ans = sum(n);
    res.send(`Sum of first ${n} natural numbers is: ${ans}`)
})


app.listen(port);