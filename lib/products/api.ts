import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import * as yup from "yup";
import myDb from "../../helpers/mongo";
import { getErrors } from "../yupError";


export async function createProduct(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await myDb();
  await db.collection("products").insertOne({
    ...req.body
  });

  res.status(200).send("ok");
}

export async function getProducts(req: NextApiRequest, res: NextApiResponse) {
  const user = req.session.user;
  if (!user) return res.status(401).send("401 Unauthorized");
  const db = await myDb();
  const points = await db
    .collection("products").find({})
    .toArray();
  res.status(200).json(points);
}
