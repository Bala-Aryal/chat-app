var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');


describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'jen';
    var text = 'heyo';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate location object', () =>{
    var from = 'Jeff';
    var latitude = 15;
    var longitude = 12;
    var url = `https://www.google.ca/maps?q=15,12`;
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});
