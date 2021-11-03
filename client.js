const net = require('net');

const connect = () => {
	const conn = net.createConnection({
		host: '165.227.47.243',
		port: '50541'
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

module.exports = connect;