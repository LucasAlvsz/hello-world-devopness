import { Router } from "express"

import { handleError } from "@/middlewares"

const router = Router()

router.get("/health", (req, res) => res.send("Hello World!"))
router.use(handleError)

export default router
