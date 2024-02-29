const insertUnitQ = "INSERT INTO unit (Unit_ID, Unit_Name, Unit_Type,Unit_Head_Name,Unit_Head_Rank,Unit_Head_Phone, Unit_Location,Date_of_Establishment) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
module.exports = { insertUnitQ };


const insertSoldierQ = "INSERT INTO soldier (soldier_id, soldier_name, soldier_rank, dob, gender, unit_id, date_of_enlistment, date_of_discharge, Regiment_Name, phone, blood_type, physical_fitness_scores) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *";
module.exports = { insertSoldierQ };