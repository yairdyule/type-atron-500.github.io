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

new App(appOptions);






// app.get('/', async (req, res) => {
//   const allUsers = await db.user.findMany()
//   console.log(allUsers)
//   res.json(allUsers)
// })
//
// app.post('/text', async (req, res) => {
//   let {createText } = req.body;
//   var text = await db.text.findUnique({
//     where: {
//       text: createText
//     }
//   })
//
//   if (text != null) {
//     return res.send({msg: 'sry, already got that one'})
//   }
//
//   text = await db.text.create({
//     data: {
//       text: createText
//     }
//   })
//
//   res.send({msg: 'text added successfully'})
// })
//
// app.get('/text', async (req, res) => {
//   const texts = await db.text.findMany({
//     select: {
//       text: true
//     }
//   })
//
//   let text = texts.map(i => i.text)[Math.floor(Math.random() * texts.length)]
//
//   res.send({text})
// })
//
// app.post('/signup', async (req, res) => {
//   const {username, password} = req.body
//
//   var result = await db.user.findUnique({
//     where: {
//       username: username
//     }
//   })
//
//   if (result !== null) {
//     return res.send({login: false, msg:'someone already exists with that username'})
//   }
//
//   result = await db.user.create({
//     data: {
//       username:username ,
//       password 
//     }
//   })
//   res.send({login: true})
//
// })
//
// app.post('/login', async (req, res) => {
//   const {username, password} = req.body
//   const result = await db.user.findUnique({
//     where: {
//       username: username
//     }
//   })
//   if (result?.password == password) {
//     res.status(200).send({login: true, msg: 'login success'})
//   } else {
//     res.status(200).send({login: false, msg: 'no user exists with those credentials'})
//   }
// })
//
// app.listen(8000, () => {
//   console.log('app listening on http://localhost:8000')
// })
