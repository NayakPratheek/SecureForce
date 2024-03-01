const insertUnitQ = "INSERT INTO unit (Unit_ID, Unit_Name, Unit_Type,Unit_Head_Name,Unit_Head_Rank,Unit_Head_Phone, Unit_Location,Date_of_Establishment) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
const insertSoldierQ = "INSERT INTO soldier (Soldier_ID, Soldier_Name, Soldier_Rank, DOB, Gender, Unit_ID, Date_of_Enlistment, Date_of_Discharge, Regiment_Name, Phone, Blood_Type, Physical_Fitness_Scores) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *";
const insertEquipmentQ = "INSERT INTO equipment ( Equipment_ID, Equipment_Name, Equipment_Type, Unit_ID, Quantity, Condition) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
const insertCommanderQ = "INSERT INTO commander ( Commander_ID,Commander_Name,Commander_Rank,Unit_ID,Phone,Date_of_Commission,Awards) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";

module.exports = {
    insertUnitQ,
    insertSoldierQ,
    insertEquipmentQ,
    insertCommanderQ
};
