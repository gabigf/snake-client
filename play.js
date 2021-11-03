const { connect } = require('./client');
const { setupInput } = require('./input');



const obj = connect();
setupInput(obj);