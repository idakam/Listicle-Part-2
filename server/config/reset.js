import { pool } from "./database.js";
import "./dotenv.js";
import treeData from "../data/treeData.js";

const createTreesTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS trees;

    CREATE TABLE IF NOT EXISTS trees (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        location TEXT NOT NULL,
        latinName VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        treeCode VARCHAR(225) NOT NULL,
        height VARCHAR(225) NOT NULL,
        trunkDiameter VARCHAR(225) NOT NULL,
        canopySpread VARCHAR(255) NOT NULL,
        AFAPoints VARCHAR(255) NOT NULL,
        description TEXT NOT NULL
    )
  `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 trees table created successfully");
  } catch (err) {
    console.error("⚠️ error creating trees table", err);
  }
};

const seedTreesTable = async () => {
  await createTreesTable();

  treeData.forEach((tree) => {
    const insertQuery = {
      text: "INSERT INTO trees (name, location, latinName, image, treeCode, height, trunkDiameter, canopySpread, AFAPoints, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
    };

    const values = [
      tree.name,
      tree.location,
      tree.latinName,
      tree.image,
      tree.treeCode,
      tree.height,
      tree.trunkDiameter,
      tree.canopySpread,
      tree.AFAPoints,
      tree.description,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting gift", err);
        return;
      }

      console.log(`✅ ${tree.name} added successfully`);
    });
  });
};

seedTreesTable();
