let connection;


const setupInput = conn => {
	connection = conn;
	const stdin = process.stdin;
	stdin.setRawMode(true);
	stdin.setEncoding('utf8');
	stdin.resume();

	const handleUserInput = input => {
		if (input === '\u0003') {
			process.exit();
		} else if (input === 'w') {
			connection.write('Move: up');
		} else if (input === 'd') {
			connection.write('Move: right');
		} else if (input === 's') {
			connection.write('Move: down');
		} else if (input === 'a') {
			connection.write('Move: left');
		} else if (input === 'p') {
			connection.write('Say: big snek');
		}
	};

	stdin.on('data', handleUserInput);

	return stdin;
}


module.exports = { setupInput };