'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {
    console.log(`received event ${JSON.stringify(event, null, 2)}`);
    console.log(`name =${event.name}`);

    const { name='world' } = event;
    const greetings = `hello ${name}`;
    console.log(greetings);

    callback(null, greetings);
};
