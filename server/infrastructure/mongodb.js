const mongoose = require('mongoose');

const MONGO_URL = 'mongodb://mongo:kJGuXAFhJHjUHnqJztfZzgZVPnvfBben@junction.proxy.rlwy.net:36804'

class ConnectToDatabase {
  constructor() {}

  async connect() {
    try {
      await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Conectado a MongoDB');
    } catch (error) {
      console.error('Error al conectar a MongoDB:', error);
      throw new Error('Error connecting');
    }
  }
}

module.exports = ConnectToDatabase;