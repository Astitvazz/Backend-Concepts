const express = require('express')
const app = express()
const port = 3000
const data= require('../nomvc/data.json')
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World! I am doing it without mvc')
})

app.get('/students', (req, res) => {
  res.json(data)
})
app.get('/students/:id', (req, res) => {
  const myid=req.params.id;
  let temp={}
  for(let i=0;i<data.length;i++){
    if(data[i].ID===myid){
        temp=data[i];
        break;
    }
  }
  res.json(temp);
})

app.delete('/students/:id', (req, res) => {
    const stbd=req.params.id
    for(let i=0;i<data.length;i++){
        if(data[i].ID===stbd){
            data.splice(i,1)
            break;
        }
    }
  res.send('student deleted successfully')
})

app.put('/students/:id', (req, res) => {
    const tempr=req.body;
    const stid=req.params.id;
    for(let i=0;i<data.length;i++){
        if(data[i].ID===stid){
            data[i]=tempr;
            break;
        }
    }
  res.send('user updated successfully')
})



app.post('/students', (req, res) => {
    const student=req.body
    data.push(student)
  res.send("student is added successfully")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
