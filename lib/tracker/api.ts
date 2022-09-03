import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import * as yup from "yup";
import myDb from "../../helpers/mongo";
import { getErrors } from "../yupError";

let schema = yup.object().shape({
  userId: yup.string().required(),
  IMEI: yup.number().required().positive().integer(),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
});

export async function createDeviceTracker(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = await schema.validate(req.body);
  const err = getErrors(body);
  if (err) return res.status(400).json(err);
  const db = await myDb();
  await db.collection("trackers").insertOne({
    userId: new ObjectId(body.userId),
    IMEI: body.IMEI,
  });

  res.status(200).send("ok");
}

export async function getTracekrs(req: NextApiRequest, res: NextApiResponse) {
  const user = req.session.user;
  if (!user) return res.status(401).send("401 Unauthorized");
  const db = await myDb();
  const isAdmin = user.admin;
  const match = isAdmin
    ? {}
    : {
        userId: new ObjectId(user.id),
      };
  const points = await db
    .collection("trackers")
    .aggregate([
      { $match: match },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "users",
        },
      },
      { $unwind: "$users" },
      { $unwind: "$users" },
      { $project: { _id: 1, IMEI: 1, owner: "$users.userName" } },
    ])
    .toArray();
  res.status(200).json(points);
}
