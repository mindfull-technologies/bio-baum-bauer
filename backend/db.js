import mongoose from 'mongoose';

const connect = async () => {
    mongoose
        .connect(`${process.env.MONGODB_URI}`)
        .then(() => {
            console.log('Connected to MongoDB!');
        })
        .catch(error => {
            console.error('Error connecting to MongoDB: ', error.message);
            process.exit(1);
        })
};

const close = () => mongoose.connection.close();

export default { connect, close };