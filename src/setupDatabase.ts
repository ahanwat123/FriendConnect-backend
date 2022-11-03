import mongoose from 'mongoose';
import Logger from 'bunyan';
import { config } from './config';

const log: Logger = config.createLogger('setup');

export default () => {
    const connect = () => {
        mongoose.connect(`${config.DATABASE_URL}`).then(()=>{
            log.info('Successfully Connected');
        }).catch((error)=>{
           log.error('Error While Connectinh', error);
            return process.exit(1);
        });
    };
    connect();

    mongoose.connection.on('disconnected', connect);
};