import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
const KEY = 'somerandomkeyfornow'

export default function (req, res) {

  const { username, password } = req.body

  if (!req.body) { 
    res.statusCode = 404
    res.end('Error')
    return
  }

  res.json({
    token: jwt.sign({
      username,
      admin: username === 'admin' && password === 'admin'
    }, KEY),
  })

} 