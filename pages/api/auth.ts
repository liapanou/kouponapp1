import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../lib/withSession";

export default withSessionRoute(loginRoute);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { userName, type } = req.body;

  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  switch (type) {
    case "login":
      if (userName === "admin")
        req.session.user = {
          id: 230,
          admin: true,
        };
      else if (userName === "store") {
        req.session.user = {
          id: 231,
          store: true,
        };
      } else
        req.session.user = {
          id: 232,
        };

      await req.session.save();
      res.json({ ok: true });
      break;

    case "logout":
      await req.session.destroy();
      res.json({ ok: true });
      break;

    case "register":
      req.session.user = {
        id: 230,
        admin: true,
      };
      await req.session.save();
      res.json({ ok: true });

    default:
      break;
  }
}
