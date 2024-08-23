import { Router } from "express"
import { createUrl,getUrl } from "../controllers/url.controller.js"

const urlRouter = Router()

urlRouter.route("/")
.post(createUrl)

urlRouter.route("/:customUrl")
.get(getUrl)

export default urlRouter