const express = require('./index.js')
const mongoose = require('./db/connection.js')
const Author = mongoose.model('Author')
const app = express()
const port = 4000

app.get('/authors', (req, res) => {
  Author.find({}).then((authors) => {
    res.json(authors)
  })
})

app.post('/authors', (req, res) => {
  Author.create(req.body).then((author) => {
    res.status(200).json(author)
  })
})

app.get('/authors/:id', (req, res) => {
  Author.findOne({_id: req.params.id}).then((author) => {
    res.json(author)
  })
})

app.put('/authors/:id', (req, res) => {
  Author.findOneAndUpdate({_id: req.params.id}, req.body).then((author) => {
    res.status(200).json(author)
  })
})

app.delete('/authors/:id', (req, res) => {
  Author.findOneAndRemovbe({_id: req.params.id}).then(() => {
    res.status(200).send('author killed')
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
