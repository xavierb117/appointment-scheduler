import express from 'express';

const app = express();

app.use(express.static('public'));

const PORT = 3000;

const info = [];

app.use(express.urlencoded({extended:true}));

// app.get('/', (req, res) => {
//     res.send("<h1>Hello World</h1>")
// });

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
})

app.post('/submit-order', (req, res) => {
    info.push(req.body);
    console.log(req.body)
    res.send(`<h1>Thank you for your appointment ${req.body.fname}</h1>`)
})
app.get('/admin/orders', (req, res) =>{
    res.send(info)
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})