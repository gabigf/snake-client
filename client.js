const net = require('net');
const { IP, PORT } = require('./constants');

const connect = () => {
	const conn = net.createConnection({
		host: IP,
		port: PORT
	});
  
	conn.on('connect', () => {
		conn.write(`Name: GAB`);
	});

	conn.on('data', data => {
		console.log(`We just received some data: ${data}`);
	});



	conn.setEncoding('utf-8');
	return conn;
}

console.log('Connecting...');

module.exports = { connect };