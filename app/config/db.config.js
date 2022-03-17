// module.exports = {
//   HOST: "localhost",
//   USER: "postgres",
//   PASSWORD: "123456",
//   DB: "testdb",
//   dialect: "postgres",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// };

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "testdb",
  password: "123456",
  port: 5432,
});

module.exports = pool;
