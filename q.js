const insertUnitQ = "INSERT INTO unit (Unit_ID, Unit_Name,Unit_Type,Unit_Location,Date_of_Establishment) VALUES ($1, $2,$3,$4,$5) returning *"
module.exports = { insertUnitQ }