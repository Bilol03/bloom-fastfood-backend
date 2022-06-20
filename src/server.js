import { connection } from "./db.js";

async function main() {
    await connection()
}
main()