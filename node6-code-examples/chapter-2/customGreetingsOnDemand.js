'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {
    console.log(`received event ${JSON.stringify(event, null, 2)}`);

    const { greet = 'hello', name = 'world' } = event;
    const greetings = `${greet} ${name}`;

    console.log(`greet=${greet}, name=${name}`);
    console.log(greetings);

    callback(null, greetings);
};
