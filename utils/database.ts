/* -------------------------------------------------------------------------- */
/*                                  Database                                  */
/* -------------------------------------------------------------------------- */

import Surreal from "surrealdb";

import "https://deno.land/x/dotenv@v3.2.0/load.ts";

const domain = Deno.env.get("DATABASE_URL");

const db = new Surreal(domain);

await db.signin({
  user: "root",
  pass: "root",
});

await db.use('test', 'test')

export default db;