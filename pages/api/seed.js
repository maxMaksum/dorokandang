import Customers from '../../lib/Customers';
import UserQ from '../../UserQ'
import db from '../../lib/db';

const handler = async (req, res) => {
  await db.connect();
  await Customers.deleteMany();
  await Customers.insertMany(UserQ);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
};
export default handler;
  


  