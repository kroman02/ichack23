import {NextApiRequest, NextApiResponse} from "next";
import jwt from 'jsonwebtoken'

const KEY = 'somerandomkeyfornow'
export default function (req, res) {
  console.log('in secret')
  console.log(req)
  const {token} = req.body

  const {admin} =  jwt.verify(token, KEY)

  if(admin) {
    res.json({ secretAdminCode: 12345})
  } else {
    res.json({ admin: false })
  }
}