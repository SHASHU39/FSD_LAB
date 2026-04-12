import mongoose from 'mongoose';

const mongoURI = 'mongodb://127.0.0.1:27017/studentdb';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});
import mongoose from 'mongoose';

const uri = 'mongodb://127.0.0.1:27017/studentdb';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));
