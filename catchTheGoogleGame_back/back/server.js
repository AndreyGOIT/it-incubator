import express from 'express';
import cors from 'cors'
import { getGameStatus, getGooglePosition, getGridSize, getPlayerPositions, getPoints, getPointsToLose, getPointsToWin, movePlayer, playAgain } from './state-manager.js';
const app = express()
const port = 3000

let timerInterval;
let startTime;
let totalGameTime = "0:0";

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${minutes}m:${seconds}s`;
}

app.use(cors())

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
app.get('/start-timer', (req, res) => {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        totalGameTime = formatTime(elapsedTime);
    }, 1000);
    res.send({ message: 'Timer started', time: totalGameTime });
});

app.get('/stop-timer', (req, res) => {
    clearInterval(timerInterval);
    res.send({ message: 'Timer stopped', time: totalGameTime });
});

app.get('/reset-timer', (req, res) => {
    clearInterval(timerInterval);
    startTime = null;
    totalGameTime = "0:0";
    res.send({ message: 'Timer reset', time: totalGameTime });
});

app.get('/get-time', (req, res) => {
    res.send({ time: totalGameTime });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})