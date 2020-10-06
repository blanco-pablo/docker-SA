const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/mydb')
    .then(db => console.log('DB is connect',db.connection.host))
    .catch(err => console.err(err));