// @ts-check
import express from 'express'
import { Cron } from 'croner'
import { switchFn } from './src/switch.js'

const app = express();
const port = 2500;

app.get('/', (_, res) => {
	res.sendFile('index.html', { root: '.' })
});

app.get('/:outlet/:action', ({ params: { outlet, action } }, res) => {
	const status = switchFn({ outlet, action }) ? 200 : 400
	res.sendStatus(status)
});

// Force switch off at 4:30 am
Cron('30 4 * * *', () => {
	['1', '2', '3', '4', '5'].forEach(outlet => switchFn({ outlet, action: 'OFF' }))
});

app.listen(port);
