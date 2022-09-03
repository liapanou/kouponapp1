import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../../lib/withSession";
import { getPoints } from "../../../lib/points/api";

export default withSessionRoute(trackers);

async function trackers(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getPoints(req, res);
    default:
      break;
  }
}
