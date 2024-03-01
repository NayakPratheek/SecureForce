const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./server/db");
const { insertUnitQ, insertSoldierQ, insertEquipmentQ, insertCommanderQ } = require("./q");

app.use(cors());
app.use(express.json());

// INSERTING

app.post("/unit", async (req, res) => {
    try {
        const { Unit_ID, Unit_Name, Unit_Type, Unit_Head_Name, Unit_Head_Rank, Unit_Head_Phone, Unit_Location, Date_of_Establishment } = req.body;
        const newUnit = await pool.query(
            insertUnitQ,
            [Unit_ID, Unit_Name, Unit_Type, Unit_Head_Name, Unit_Head_Rank, Unit_Head_Phone, Unit_Location, Date_of_Establishment]
        );
        res.send(newUnit.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.post("/soldier", async (req, res) => {
    try {
        const { Soldier_ID, Soldier_Name, Soldier_Rank, DOB, Gender, Unit_ID, Date_of_Enlistment, Date_of_Discharge, Regiment_Name, Phone, Blood_Type, Physical_Fitness_Scores } = req.body;
        const newSoldier = await pool.query(
            insertSoldierQ,
            [Soldier_ID, Soldier_Name, Soldier_Rank, DOB, Gender, Unit_ID, Date_of_Enlistment, Date_of_Discharge, Regiment_Name, Phone, Blood_Type, Physical_Fitness_Scores]
        );
        res.json(newSoldier.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.post("/equipment", async (req, res) => {
    try {
        const { Equipment_ID, Equipment_Name, Equipment_Type, Unit_ID, Quantity, Condition } = req.body;
        const newEquipment = await pool.query(
            insertEquipmentQ,
            [Equipment_ID, Equipment_Name, Equipment_Type, Unit_ID, Quantity, Condition]
        );
        res.json(newEquipment.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.post("/commander", async (req, res) => {
    try {
        const { Commander_ID, Commander_Name, Commander_Rank, Unit_ID, Phone, Date_of_Commission, Awards } = req.body;
        const newCommander = await pool.query(
            insertCommanderQ,
            [Commander_ID, Commander_Name, Commander_Rank, Unit_ID, Phone, Date_of_Commission, Awards]
        );
        res.json(newCommander.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// RETRIEVE THE DATA

app.get("/soldiers", async (req, res) => {
    try {
        const allSoldiers = await pool.query("SELECT * FROM soldier");
        res.json(allSoldiers.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.get("/equipments", async (req, res) => {
    try {
        const allEquipments = await pool.query("SELECT * FROM equipment");
        res.json(allEquipments.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


app.get("/units", async (req, res) => {
    try {
        const allEquipments = await pool.query("SELECT * FROM UNIT");
        res.json(allEquipments.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.get("/commanders", async (req, res) => {
    try {
        const allEquipments = await pool.query("SELECT * FROM COMMANDER");
        res.json(allEquipments.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});






app.listen(5000, () => {
    console.log("Server running at port 5000");
});
