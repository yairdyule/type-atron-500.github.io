import {Router} from 'express'
import {PrismaClient} from '@prisma/client'

const textRouter = Router();
const db = new PrismaClient();

// add text to the database
textRouter.post('/', async (req, res) => {
  let {createText } = req.body;

  var text = await db.text.findUnique({
    where: {
      text: createText
    }
  })

  if (text !== null) {
    return res.send({success: false, msg: 'sry, already got that one'})
  }

  text = await db.text.create({
    data: {
      text: createText
    }
  })

  res.send({success: true, msg: 'text added successfully'})

})

// get a random text from the database
textRouter.get('/', async (req, res) => {
  const texts = await db.text.findMany({
    select: {
      text: true
    }
  })

  let text = texts.map(i => i.text)[Math.floor(Math.random() * texts.length)]

  res.send({success:true, text})
})

export default textRouter
