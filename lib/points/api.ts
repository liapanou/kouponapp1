import myDb from "../../helpers/mongo";
import { subDays } from "date-fns";
import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";

export async function getPoints(req: NextApiRequest, res: NextApiResponse) {
  if (!req.session?.user) return res.status(401).send("401 Unauthorized");
  const db = await myDb();
  const d = new Date();
  const above = subDays(d, Number(req.query.routes)).getTime();
  const points = await db
    .collection("points")
    .find({
      userId: new ObjectId(req.session.user.id),
      trackerIMEI: req.query.IMEI,
      time: { $gt: above },
    })
    .toArray();
  res.status(200).json(points);
}
