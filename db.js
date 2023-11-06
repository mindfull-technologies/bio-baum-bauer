import mongoose from 'mongoose';

const dbUrl = process.env.MONGODB_URI || 'mongodb://db/bbb_dev';

const connect = async () => {
    try {
        await mongoose.connect(dbUrl);
        console.log('Connected to MongoDB: ' + dbUrl);
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error.message);
        //TODO: retry logic
        //TODO: Send alert or log error if needed
        //TODO: Perform a graceful shutdown        
        process.exit(1);
    }
};

const close = () => mongoose.connection.close();

export default { connect, close };