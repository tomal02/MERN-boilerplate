import { connect, connection } from 'mongoose';

main().catch((err) => console.log(err));

async function main() {
  await connect(process.env.MONGO_URI);
  console.log(`Connected to MongoDB

  Ready State: ${connection.readyState === 1 ? 'Connected' : 'Not Connected'}`);
}
