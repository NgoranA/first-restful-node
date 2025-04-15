import express from 'express'
import { read } from "../models/models.js"
import createHttpError from 'http-errors';
const router = express.Router();


/* GET home page. */
router.get('/:id', function (req, res, next) {
  console.log(req.params)
  read(req.params.id, (err, data) => {
    if (err) {
      if (err.message === "not found") {
        next(createHttpError(404))
        return
      } else {
        next(createHttpError(500))
        return
      }
    }
    res.send(data)
  })
});

export default router
