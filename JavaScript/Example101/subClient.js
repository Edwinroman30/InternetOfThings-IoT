const mqtt = require('mqtt');

const client  = mqtt.connect('mqtt://10.0.0.10:1883');


console.log('Running Mosquitto ...')


client.on('connect', function () {
  
    console.log(`Connected`);

    if(client.connected){

        client.subscribe('broker/test', function (err) {
            if (!err) {
                //client.publish('presence', 'Hello mqtt')
                console.log(`Suscribed sucessfully :) `);
            }
        });
    }
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
});

client.on('offline', function(){

    console.log('Client out of line, please checkout the server.');
});