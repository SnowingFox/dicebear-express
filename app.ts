import express from 'express'
import { toFormat } from '@dicebear/converter';
import { createAvatar } from '@dicebear/core';
import { botttsNeutral, identicon } from '@dicebear/collection';


const app = express()

const start = () => {
  app.listen(8000)
}

start()


app.get('/avatar', async (req, res) => {
  res.header('Content-Type', 'image/png');

  const avatar = createAvatar(botttsNeutral, {
    seed: Math.random().toString()
  })

  const result = await toFormat(
    avatar.toString(),
    'png',
  ).toArrayBuffer();

  res.end(Buffer.from(result))
})
