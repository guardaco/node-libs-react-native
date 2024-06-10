global.process = require('process');

// Needed so that 'stream-http' chooses the right default protocol.
global.location = {
  protocol: 'file:',
};

// Some modules expect userAgent to be a string
global.navigator.userAgent = 'React Native';

global.crypto = require('react-native-quick-crypto');
global.Buffer = require('@craftzdog/react-native-buffer').Buffer;
