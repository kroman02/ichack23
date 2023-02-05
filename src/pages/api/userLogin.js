import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
const KEY = 'somerandomkeyfornow'

export default function (req, res) {

  const { email, password } = req.body

  if (!req.body) { 
    res.statusCode = 404
    res.end('Error')
    return
  }

  res.json({
    token: jwt.sign({
      email
    }, KEY),
  })

} 