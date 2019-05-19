const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        setTimeout(() => {
            this.emit('message', { id: uuid.v4(), msg });
        }, 3000);
    }
}

module.exports = Logger;


// This would go in another file ---->

// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', data => console.log('Called Listener', data));

// logger.log('Hello World!');
