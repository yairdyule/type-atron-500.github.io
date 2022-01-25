import express from 'express'
import cors from 'cors'
import App from './app'
import TextRouter from './routes/text'
import UserRouter from './routes/user'

const whitelist = 'http://localhost:3000/*' //todo: shove in .env
const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

const routeCreator = (r: any, rr:any) => {
  return {route: r, router: rr}
}

const appOptions = {
  port: 8000, 
  middlewares: [
    express.urlencoded({extended: true}),
    express.json(),
    cors(corsOptions)
  ],
  routes: [
    routeCreator('/text', TextRouter),
    routeCreator('/user', UserRouter)
  ]
}

new App(appOptions); //not sure if i like this style of initialization over explicitly `listening`
