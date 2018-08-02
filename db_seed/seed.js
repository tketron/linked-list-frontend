const fs = require('fs');

const companies = JSON.parse(fs.readFileSync('companies.json'));
const users = JSON.parse(fs.readFileSync('users.json'));
const jobs = JSON.parse(fs.readFileSync('jobs.json'));

//build a SQL file
const seedFilePath = './linked_list_seed.sql';
fs.writeFileSync(
  seedFilePath,
  `DROP DATABASE IF EXISTS  "linkedlist_test";
CREATE DATABASE "linkedlist_test";

DROP DATABASE IF EXISTS  "linkedlist";
CREATE DATABASE "linkedlist";
\\c "linkedlist"

CREATE TABLE companies
(
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  handle TEXT UNIQUE NOT NULL,
  logo TEXT,
  name TEXT NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE jobs
(
  id SERIAL PRIMARY KEY,
  company TEXT NOT NULL REFERENCES companies(handle) ON DELETE CASCADE,
  equity FLOAT,
  salary TEXT NOT NULL,
  title TEXT NOT NULL
);

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  current_company TEXT REFERENCES companies (handle) ON DELETE SET NULL,
  email TEXT,
  first_name TEXT,
  last_name TEXT,
  password TEXT NOT NULL,
  photo TEXT,
  username TEXT UNIQUE NOT NULL UNIQUE
);

CREATE TABLE jobs_users
(
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL REFERENCES users (username) ON DELETE CASCADE,
  job_id INTEGER NOT NULL REFERENCES jobs (id) ON DELETE CASCADE
);
`
);

//add companies, storing company handles in an array
let companyNames = [];
let companySQL = ``;

for (let c of companies) {
  companyNames.push(c.name);
  companySQL += `INSERT INTO companies (email, handle, logo, name, password) VALUES ('${
    c.email
  }', '${c.name}', '${c.logo}', '${c.name}', '${c.password}');
  `;
}

fs.appendFileSync(seedFilePath, companySQL);

//add users, giving them a random company handle
let userSQL = ``;

for (let u of users) {
  const company = companyNames[Math.floor(Math.random() * companyNames.length)];
  userSQL += `INSERT INTO users (email, current_company, first_name, last_name, password, photo, username) VALUES ('${
    u.email
  }', '${company}', '${u.first_name}', '${u.last_name}', '${u.password}', '${
    u.photo
  }', '${u.username}');
  `;
}

fs.appendFileSync(seedFilePath, userSQL);

//add jobs, assigned to a random company
let jobSQL = ``;
for (let j of jobs) {
  const company = companyNames[Math.floor(Math.random() * companyNames.length)];
  const equity = Math.random() * 3;
  jobSQL += `INSERT INTO jobs (company, equity, salary, title) VALUES ('${company}', '${equity}', '${j.salary.substring(
    1
  )}', '${j.title}');
  `;
}

fs.appendFileSync(seedFilePath, jobSQL);

fs.appendFileSync(seedFilePath, `\\q`);
