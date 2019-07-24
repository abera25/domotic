const exec = require('shelljs.exec');
const express = require('express');
const app = express();
const port = 2500;

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/:outlet/:action', ({ params: { outlet, action } }, res) => {
  if (
    ['1', '2', '3', '4', '5'].includes(outlet)
    &&
    ['ON', 'OFF'].includes(action)
  ) {
    exec(`./run.sh ${outlet} ${action}`, { silent: true });
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

app.listen(port);
