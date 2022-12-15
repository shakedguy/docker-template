import express from 'express';
import { spawn } from 'child_process';
import { argv } from 'process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const server = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = argv.slice(2);

args.forEach((arg) => console.log(arg));

var process = spawn('python', [
	`${__dirname}/../python/node_runs_me.py`,
	'This is a python script that is run by nodejs!',
]);

process.stdout.on('data', (chunk) => {
	var textChunk = chunk.toString('utf8');
	console.log('\n------------------------------------------------------------');
	console.log('python script output:');
	console.log(textChunk.replace(/(\r\n|\n|\r)/gm, ''));
	console.log('------------------------------------------------------------');
});

server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
