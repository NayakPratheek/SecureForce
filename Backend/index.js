const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./server/db");
const { insertUnitQ, insertSoldierQ, insertEquipmentQ, insertCommanderQ, insertAwardQ } = require("./q");

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

app.post("/award", async (req, res) => {
    try {
        const { Soldier_ID, Award_Name, Award_issued_date } = req.body;
        const newAward = await pool.query(
            insertAwardQ,
            [Soldier_ID, Award_Name, Award_issued_date]
        );
        res.json(newAward.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// RETRIEVE ALL THE DATA

app.get("/units", async (req, res) => {
    try {
        const allUnits = await pool.query("SELECT * FROM UNIT");
        res.json(allUnits.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

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

app.get("/commanders", async (req, res) => {
    try {
        const allCommanders = await pool.query("SELECT * FROM COMMANDER");
        res.json(allCommanders.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.get("/awards", async (req, res) => {
    try {
        const allAwards = await pool.query("SELECT * FROM AWARDS");
        res.json(allAwards.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

//RETRIEVE DATA BY PASSING ID'S

app.get("/units/:Unit_ID", async (req, res) => {
    try {
        const { Unit_ID } = req.params;
        const uni = await pool.query("SELECT * FROM UNIT WHERE Unit_ID=$1", [Unit_ID]);
        res.json(uni.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.get("/soldiers/:Soldier_ID", async (req, res) => {
    try {
        const { Soldier_ID } = req.params;
        const sol = await pool.query("SELECT * FROM SOLDIER WHERE Soldier_ID=$1", [Soldier_ID]);
        res.json(sol.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.get("/commanders/:Commander_ID", async (req, res) => {
    try {
        const { Commander_ID } = req.params;
        const com = await pool.query("SELECT * FROM COMMANDER WHERE Commander_ID = $1", [Commander_ID]);
        res.json(com.rows[0]);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
})

app.get("/equipments/:Equipment_ID", async (req, res) => {
    try {
        const { Equipment_ID } = req.params;
        const equi = await pool.query("SELECT * FROM equipment WHERE Equipment_ID=$1", [Equipment_ID]);
        res.json(equi.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.get("/awards/:Soldier_ID", async (req, res) => {
    try {
        const { Soldier_ID } = req.params;
        const awa = await pool.query("SELECT * FROM AWARDS WHERE Soldier_ID=$1", [Soldier_ID]);
        res.json(awa.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

//  UPDATE DATA

app.put("/units/:Unit_ID", async (req, res) => {
    try {
        const { Unit_ID } = req.params;
        const { Unit_Name, Unit_Type, Unit_Head_Name, Unit_Head_Rank, Unit_Head_Phone, Unit_Location, Date_of_Establishment } = req.body;

        const updateUnit = await pool.query(
            "UPDATE UNIT SET Unit_Name = $1, Unit_Type = $2, Unit_Head_Name = $3, Unit_Head_Rank = $4, Unit_Head_Phone = $5, Unit_Location = $6, Date_of_Establishment = $7 WHERE Unit_ID = $8",
            [Unit_Name, Unit_Type, Unit_Head_Name, Unit_Head_Rank, Unit_Head_Phone, Unit_Location, Date_of_Establishment, Unit_ID]
        );

        res.json("Unit updated successfully");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.put("/soldiers/:Soldier_ID", async (req, res) => {
    try {
        const { Soldier_ID } = req.params;
        const { Soldier_Name, Soldier_Rank, DOB, Gender, Unit_ID, Date_of_Enlistment, Date_of_Discharge, Regiment_Name, Phone, Blood_Type, Physical_Fitness_Scores } = req.body;

        const updateUnit = await pool.query(
            "UPDATE SOLDIER SET Soldier_Name = $1, Soldier_Rank = $2, DOB = $3, Gender = $4, Unit_ID = $5, Date_of_Enlistment = $6, Date_of_Discharge = $7,Regiment_Name=$8,Phone=$9,Blood_Type=$10,Physical_Fitness_Scores=$11, WHERE Soldier_ID = $12",
            [Soldier_Name, Soldier_Rank, DOB, Gender, Unit_ID, Date_of_Enlistment, Date_of_Discharge, Regiment_Name, Phone, Blood_Type, Physical_Fitness_Scores, Soldier_ID]
        );

        res.json("Soldier updated successfully");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.put("/equipments/:Equipment_ID", async (req, res) => {
    try {
        const { Equipment_ID } = req.params;
        const { Equipment_Name, Equipment_Type, Unit_ID, Quantity, Condition } = req.body;

        const updateUnit = await pool.query(
            "UPDATE EQUIPMENT SET Equipment_Name = $1, Equipment_Type = $2, Unit_ID = $3, Quantity = $4, Condition = $5 WHERE Equipment_ID = $6",
            [Equipment_Name, Equipment_Type, Unit_ID, Quantity, Condition, Equipment_ID]
        );

        res.json("Equipments updated successfully");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.put("/commanders/:Commander_ID", async (req, res) => {
    try {
        const { Commander_ID } = req.params;
        const { Commander_Name, Commander_Rank, Unit_ID, Phone, Date_of_Commission, Awards } = req.body;

        const updateUnit = await pool.query(
            "UPDATE COMMANDER SET Commander_Name = $1, Commander_Rank = $2, Unit_ID = $3, Phone = $4, Date_of_Commission = $5,Awards=$6 WHERE Equipment_ID = $7",
            [Commander_Name, Commander_Rank, Unit_ID, Phone, Date_of_Commission, Awards, Commander_ID]
        );

        res.json("Equipments updated successfully");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


app.put("/awards/:Soldier_ID", async (req, res) => {
    try {
        const { Soldier_ID } = req.params;
        const { Award_Name, Award_issued_date } = req.body;

        const updateAward = await pool.query(
            "UPDATE AWARDS SET Award_Name = $1, Award_issued_date = $2 WHERE Soldier_ID = $3",
            [Award_Name, Award_issued_date, Soldier_ID]
        );

        res.json("Award updated successfully");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


//DELETE DATA

app.delete("/units/:Unit_ID", async (req, res) => {
    try {
        const { Unit_ID } = req.params;
        const deleteUnit = await pool.query("DELETE FROM UNIT WHERE UNIT_ID=$1", [UNIT_ID]);
        res.json("Unit was deleted");
    } catch (err) {
        console.log("Server error");
    }
})


app.delete("/soldiers/:Sozldier_ID", async (req, res) => {
    try {
        const { Soldier_ID } = req.params;
        const deleteSoldier = await pool.query("DELETE FROM SOLDIER WHERE SOLDIER_ID =$1", [Soldier_ID]);
        res.json("Soldier data was deleted")
    } catch (err) {
        console.log(err.message);
    }
});

app.delete("/commanders/:Commander_ID", async (req, res) => {
    try {
        const { Commander_ID } = req.params;
        const deleteCommander = await pool.query("DELETE FROM COMMANDER WHERE COMMANDER_ID=$1", [Commander_ID]);
        res.json("Commander was deleted")
    } catch (err) {
        console.log(err.message);
    }
});

app.delete("/equipments/:Equipment_ID", async (req, res) => {
    try {
        const { Equipment_ID } = req.params;
        const deleteEquipment = await pool.query("DELETE FROM EQUIPMENT WHERE Equipment_ID=$1", [Equipment_ID]);
        res.json("Equipment was deleted")
    } catch (err) {
        console.log(err.message);
    }
});

app.delete("/awards/:Soldier_ID", async (req, res) => {
    try {
        const { Soldier_ID } = req.params;
        const deleteAward = await pool.query("DELETE FROM AWARDS WHERE SOLDIER_ID = $1", [Soldier_ID]);
        res.json("Award was deleted")
    }
    catch (err) {
        console.log(err.message);
    }
});






app.listen(5000, () => {
    console.log("Server running at port 5000");
});

