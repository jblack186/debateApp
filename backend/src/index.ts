import "dotenv/config"
import express, { Request, Response, NextFunction } from 'express'
import helmet from 'helmet';
import { userRouter } from "./routes/users";


const mainLoop = async () => {
  try {
    const app = express();

    //helps to secure app by setting many HTTP Headers
    app.use(helmet())

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/users', userRouter)

    const PORT = 5500
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });

  } catch (err) {
    console.log('Server failed to start', err)
  }
}
mainLoop()


