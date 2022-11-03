import express, {Express} from 'express';
import {FriendConnect} from './setupServer';
import databaseConnection from './setupDatabase';
import {config} from './config';


class Application{
    public initialize():void{
        databaseConnection();
        const app: Express = express();
        const server: FriendConnect = new FriendConnect(app);
        server.start();
    }

    private loadConfig(): void{
        config.validateConfig();
    }
}

const application: Application = new Application();
application.initialize();