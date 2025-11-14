const express = require('express');
const app = express();
let core=require('cors');
app.use(core());
let sql=require('mysql2');
let con=sql.createConnection({
    host:'127.0.0.1',
    user:"root",
    password:"ehsan1230",
    database:"my_db"
})
//console.log(con);
app.get('/api/get_likes_count', (req, res) => {
    con.connect((err)=>{
        if(err){
             console.log('error in connect db: ',err);
             return res.json(err)
        }
        console.log('connected to db')
        res.json('ok')
    })
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});