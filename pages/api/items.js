import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  const { method } = req;
  const { db } = await connectToDatabase();

  switch (method) {
    case 'GET':
      const data = await db.collection("items").find({}).toArray();
      res.status(200).json(data);
      break;
    case 'POST':
      const item = await db.collection("items").insertOne(req.body);
      res.status(201).json(item.ops[0]);
      break;
    case 'PUT':
      const { _id, ...rest } = req.body;
      const updateResult = await db.collection("items").updateOne({ _id }, { $set: rest });
      res.status(200).json(updateResult);
      break;
    case 'DELETE':
      const deleteResult = await db.collection("items").deleteOne({ _id: req.body._id });
      res.status(200).json(deleteResult);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
