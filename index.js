const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./server/db");
const { insertUnitQ } = require("./q");

app.use(cors());
app.use(express.json());

// INSERTING
app.post("/soldier", async (req, res) => {
    try {
        const { soldier_id, soldier_name, soldier_rank, dob, gender, unit_id, date_of_enlistment, date_of_discharge, Regiment_Name, phone, blood_type, physical_fitness_scores } = req.body;
        const newSoldier = await pool.query(
            "INSERT INTO soldier (soldier_id, soldier_name,soldier_rank,dob,gender,unit_id,date_of_enlistment,date_of_discharge,Regiment_Name,phone,blood_type,physical_fitness_scores) VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) returning *",
            [soldier_id, soldier_name, soldier_rank, dob, gender, unit_id, date_of_enlistment, date_of_discharge, Regiment_Name, phone, blood_type, physical_fitness_scores]
        );
        res.json(newSoldier.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.post("/unit", async (req, res) => {
    try {
        const { Unit_ID, Unit_Name, Unit_Type, Unit_Location, Date_of_Establishment } = req.body;
        const newUnit = await pool.query(
            insertUnitQ,
            [Unit_ID, Unit_Name, Unit_Type, Unit_Location, Date_of_Establishment]
        );
        res.json(newUnit.rows[0]);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})


app.listen(5000, () => {
    console.log("Server running at port 5000");
});
