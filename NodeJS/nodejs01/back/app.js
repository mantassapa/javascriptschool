const products = require("./data.js")

const express = require("express")
const app = express()

app.use(express.json())

app.get("/cia/yra/mano/routas", (req, res)=>{
    res.send(products)
})

app.get("/cia/yra/mano/routas/:id", (req, res)=>{
    const product=products.find((prod)=> prod.id===parseInt(req.params.id))
    if(!product){
        res.status(404).send("product not found")
    }
    res.send(product)
})
app.post("/cia/yra/mano/routas",(req,res)=>{
    const newProduct = {
        id:10,
        title: "watching"
    }
    products.push(newProduct)
res.send(products)
})
app.put("/cia/yra/mano/routas/:id",(req,res)=>{
    const product=products.find((prod)=> prod.id===parseInt(req.params.id))
    if(!product){
        res.status(404).send("product not found")
    }
    product.title = req.body.title
    res.send(product)
})

app.delete("/cia/yra/mano/routas/:id",(req,res)=>{
    const product=products.find((prod)=> prod.id===parseInt(req.params.id))
    if(!product){
        res.status(404).send("product not found")
    }


    const productIndex=products.indexOf(product)
    products.splice(productIndex,1)
    res.send(product)
})

const PORT =5000
app.listen(PORT || 8000, ()=>{
    console.log("running om port " + PORT);
})
