import { Router } from "express";
import { signIn, signUp, message } from "../controllers/user.controller";
import passport from "passport";
const router = Router();

router.post("/signup", signUp);
router.post("/signin", signIn);

router.post(
  "/message",
  passport.authenticate("jwt", { session: false }),
  message
);

router.post("/auth", passport.authenticate("jwt", { session: false }));

export default router;
