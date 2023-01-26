import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/peterboro', { useNewUrlParser: true, useUnifiedTopology: true });

const XSchema = new mongoose.Schema({

})

const X = mongoose.model('X', XSchema)

export default X