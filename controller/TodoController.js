// Add a dummy item tilll we create our DB:
var data=[
    // {number:1, item:'Get Milk'},
    // {number:2, item:'Walk Dog'},
    // {number:3, item:'Code!'}
]
const express= require('express')


const app= express()


// var urlencodedParser= bodyParser.urlencoded({extended:false})

app.use(express.urlencoded({extended:true}))


module.exports= function(app){

    app.get('/todo', (req, res)=>{
        res.render('todo',  {todos:data})
    })

    app.post('/todo', (req, res) => {
        try {
            const newItem = { number: data.length + 1, item: req.body.item };
            data.push(newItem);
            res.json(newItem);
        } catch (err) {
            console.log(err);
        }
    });
    
    
    app.delete('/todo/:id', (req, res) => {
        const id = req.params.id;
        data = data.filter(item => item.number !== parseInt(id));
        res.json(data);
    });
    
    }