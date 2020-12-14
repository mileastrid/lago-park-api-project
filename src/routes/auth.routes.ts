import { Router } from "express";
import { signIn, signUp, message } from "../controllers/user.controller";
import passport from "passport";
import { Request, Response } from "express";
const router = Router();

router.post("/signup", signUp);
router.post("/signin", signIn);

router.post(
  "/message",
  passport.authenticate("jwt", { session: false }),
  message
);

router.post(
  "/auth",
  passport.authenticate("jwt", { session: false }),
  (req: Request, res: Response) => {
    return res.status(400).json({ auth: true });
  }
);

export default router;
