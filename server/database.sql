CREATE DATABASE dbproject;

CREATE TABLE SOLDIER(
    Soldier_ID INT,
    Soldier_Name VARCHAR(20),
    Soldier_Rank VARCHAR(20),
    DOB date,
    Gender VARCHAR(7),
    Unit_ID INT,
    Date_of_Enlistment date,
    Date_of_Discharge  date,
    Regiment_Name varchar(20),
    Phone int,
    Blood_Type   VARCHAR(3),
    Physical_Fitness_Scores int
);

CREATE TABLE UNIT(
    Unit_ID INT PRIMARY KEY,
    Unit_Name VARCHAR(20),
    Unit_Type VARCHAR(20),
    Unit_Location VARCHAR(20),
    Commander_ID int,
    Date_of_Establishment date
);

CREATE TABLE COMMANDER(
    Commander_ID INT primary key,
    Commander_Name VARCHAR(20),
    Commander_Rank VARCHAR(20),
    Unit_ID int,
    Phone numeric,
    Date_of_Commission date,
    Awards VARCHAR(20),
    FOREIGN KEY(Unit_ID) references UNIT(Unit_ID)
);

CREATE TABLE EQUIPMENT(
    Equipment_ID INT primary key,
    Equipment_Name VARCHAR(20),
    Equipment_Type VARCHAR(20),
    Unit_ID int,
    Quantity int,
    Condition VARCHAR(10),
    FOREIGN KEY(Unit_ID) references UNIT(Unit_ID)
);

CREATE TABLE MISSION(
    Mission_ID INT primary key,
    Mission_Name VARCHAR(20),
    Mission_Location VARCHAR(20),
    Mission_Start_Date date,
    Mission_End_Date date,
    Commander_ID int,
    Mission_Status varchar(10),
    foreign key(Commander_ID) references COMMANDER(Commander_ID)
);

CREATE TABLE MISSION_EQUIPMENT(
    Mission_ID int,
    Equipment_ID int,
    foreign key(Mission_ID) references MISSION(Mission_ID)
);