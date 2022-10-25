import { NextApiRequest, NextApiResponse } from "next";
import { createProduct, getProducts } from "../../lib/products/api";
import { createUser, getUsers, login, logout } from "../../lib/users/api";
import { withSessionRoute } from "../../lib/withSession";

export default withSessionRoute(loginRoute);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      getProducts(req, res)
    case "POST":
      createProduct(req, res)


    default:
      res.status(405).send("No method allowed");
      break;
  }
}
