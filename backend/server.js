import { MongoClient, ServerApiVersion } from "mongodb";
import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const uri =
  "mongodb+srv://kaminosmongo:kaminos3085mBVVm%40ad@kaminosdb.c2ikbbo.mongodb.net/?appName=kaminosdb";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("MongoDB conectado");
    await  listDatabases(client);
  } finally {
    await client.close();
  }
}

async function listDatabases(client){
    let databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    let kaminosdb = databasesList.databases.find(db => db.name === "Kaminos");
    if (kaminosdb) {
        kaminosdb.collections = await client.db("Kaminos").listCollections().toArray();
        console.log(JSON.stringify(kaminosdb, null, 2));
    }
};

run().catch(console.error);