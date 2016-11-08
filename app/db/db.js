var mongoose = require('mongoose');

module.exports = {
  connect: function (mode, callback) {
   let url = 'mongodb://localhost/freetravel-db';
    //let url=process.env.PROD_MONGODB;
    if (mode === 'test') {
      url = 'mongodb://localhost/freetravel-test-db';
    }
    mongoose.connect(url||process.env.PROD_MONGODB, callback);
  },
  close: function (callback) {
    mongoose.connection.close(callback);
  }
};
