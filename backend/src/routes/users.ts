import { userControllers } from "../controllers/users";
import express from 'express';
let userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  try {
    let users = await userControllers.readAll()
    if (Array.isArray(users) && users.length === 0) {
      res.status(400).json({
        error: 'No users in database'
      })
    }
    return res.status(200).send(users)

  } catch(err) {
   return res.status(500).json({
      error: err
    })
  }
})

userRouter.get('/:id', async (req, res) => {
  try {
    let id = Number(req.params.id)
    let user = await userControllers.readById(id)
    return res.status(200).json(user)
  } catch(err) {
      return res.status(500).json({
        error: err
    })
  }
})

userRouter.post('/', async (req, res) => {
  try {
    const user = req.body
    let newUser = await userControllers.create(user)
    return res.status(201).json({
      user: newUser
    })
  } catch(err) {
      return res.status(500).json({
        err: err
    })
  }
})

userRouter.delete('/:id', async (req, res) => {
  try {
    let id = Number(req.params.id)
    let user = await userControllers.delete(id)
    return res.status(200).json(user)
  } catch(err) {
      return res.status(500).json({
        error: err
    })
  }
})



export {userRouter}
