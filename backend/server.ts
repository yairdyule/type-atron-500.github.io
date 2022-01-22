import express from 'express'
import {PrismaClient} from "@prisma/client"
import cors from 'cors'

const db = new PrismaClient()
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())
const whitelist = 'http://localhost:3000'

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

app.use(cors(corsOptions));


app.get('/', async (req, res) => {
  const allUsers = await db.user.findMany()
  console.log(allUsers)
  res.json(allUsers)
})

app.post('/text', async (req, res) => {
  let {createText } = req.body;
  var text = await db.text.findUnique({
    where: {
      text: createText
    }
  })

  if (text != null) {
    return res.send({msg: 'sry, already got that one'})
  }

  text = await db.text.create({
    data: {
      text: createText
    }
  })

  res.send({msg: 'text added successfully'})
})

app.get('/text', async (req, res) => {
  const texts = await db.text.findMany({
    select: {
      text: true
    }
  })

  let text = texts.map(i => i.text)[Math.floor(Math.random() * texts.length)]

  console.log(text)
  res.send({text})
})

app.post('/signup', async (req, res) => {
  const {username, password} = req.body

  var result = await db.user.findUnique({
    where: {
      username: username
    }
  })

  if (result !== null) {
    return res.send({login: false, msg:'someone already exists with that username'})
  }

  result = await db.user.create({
    data: {
      username:username ,
      password 
    }
  })
  res.send({login: true})

})

app.post('/login', async (req, res) => {
  const {username, password} = req.body
  const result = await db.user.findUnique({
    where: {
      username: username
    }
  })
  if (result?.password == password) {
    res.status(200).send({login: true, msg: 'login success'})
  } else {
    res.status(200).send({login: false, msg: 'no user exists with those credentials'})
  }
})

app.listen(8000, () => {
  console.log('app listening on http://localhost:8000')
})
