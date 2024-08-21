import { Router } from "express"
import { createUrl,getUrl } from "../controllers/url.controller.js"

const urlRouter = Router()

urlRouter.route("/api/url")
.post(createUrl)

urlRouter.route("/api/url/:customUrl")
.get(getUrl)

export default urlRouter