import express from 'express';
import { getGameStatus, getGooglePosition, getGridSize, getPlayerPositions, getPoints, getPointsToLose, getPointsToWin, movePlayer, playAgain } from './state-manager.js';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/getPoints', (req, res) => {
  res.send(getPoints())
})
app.get('/getGameStatus', (req, res) => {
  res.send({value: getGameStatus()})
})
app.get('/getGridSize', (req, res) => {
  res.send(getGridSize())
})
app.get('/getGooglePosition', (req, res) => {
  res.send(getGooglePosition())
})
app.get('/getPlayerPositions', (req, res) => {
  res.send(getPlayerPositions())
})
app.get('/getPointsToWin', (req, res) => {
  res.send(getPointsToWin())
})
app.get('/getPointsToLose', (req, res) => {
  res.send(getPointsToLose())
})
app.get('/playAgain', (req, res) => {
    playAgain()
  res.send(204)
})
app.get('/movePlayer', (req, res) => {
    movePlayer(req.query.id, req.query.direction)
  res.send(204)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})