import express from 'express';
import { getGameStatus, getPoints } from '../data/state-manager.js';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/getPoints', (req, res) => {
  res.send(getPoints())
})
app.get('/getGameStatus', (req, res) => {
  res.send(getGameStatus())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})