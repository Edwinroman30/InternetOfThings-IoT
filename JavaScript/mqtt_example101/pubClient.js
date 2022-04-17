const mqtt = require('mqtt');

const client  = mqtt.connect('mqtt://10.0.0.10:1883');


console.log('Running Mosquitto Client2 ...')


client.on('connect', function () {
  
    console.log(`Connected`);

    if(client.connected){
        client.publish('broker/test', 'From NodeJS one the best Engine!');
    }

});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
});

client.on('offline', function(){

    console.log('Client2 out of line, please checkout the server.');
});