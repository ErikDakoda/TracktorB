import passport from "passport";
import nextConnect from "next-connect";
import { encryptSession } from "~/lib/api/account";
import { setTokenCookie } from "~/lib/api/account";
import { NextApiRequest, NextApiResponse } from "next";
import runSeed from "~/lib/api/runSeed";

import { localStrategy } from "~/lib/api/account/passport/password-local";
import { authenticate } from "~/lib/api/account";
import { debugAccount } from "~/lib/debuggers";
import { UserType } from "~/models/user";
import cloneDeep from "lodash/cloneDeep.js";

passport.use(localStrategy);

const authenticateWithPassword = async (req, res) => {
  return authenticate("local", req, res) as Promise<UserType>;
};

export interface LoginReqBody {
  email: string; // /!\  should match the "usernameField" of passport local strategy setup (default is "username")
  password: string;
}
// NOTE: adding NextApiRequest, NextApiResponse is required to get the right typings in next-connect
// this is the normal behaviour
export default nextConnect<NextApiRequest, NextApiResponse>()
  .use(passport.initialize())
  .post(async (req, res) => {
    try {
      const user = await authenticateWithPassword(req, res);
      debugAccount(`Got user after authentication ${JSON.stringify(user)}`);
      // TODO: try gain with {...user} (previously it was a Mongoose Document but now we call ".toObject()" so spreading should work ok)
      const session = cloneDeep(user);
      // The token is a string with the encrypted session
      const token = await encryptSession(session);

      setTokenCookie(res, token);
      res.status(200).send({ done: true });
    } catch (error) {
      console.error(error);
      res.status(401).send(error.message);
    }
  });

// Seed in development
runSeed();
