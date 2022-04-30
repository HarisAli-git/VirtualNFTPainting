const pool = require("../config/db.config");

//Create Tag Function
exports.display_profile = async (req, res) => {
  const { name } = req.params;
  console.log("error coming here", req.params);
  try {
    const data = await pool.query(`SELECT * FROM account WHERE name = $1;`, [
      name,
    ]); //Verifying if the tag exists in the database
    const tags = data.rows;
    if (tags.length == 0) {
      res.status(400).json({
        error: "User is not present in the database",
        status: -1,
      });
    } else {
      res.status(200).json({
        message: "Users Returned",
        data: data.rows,
        status: 1,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Database error occurred while creating tag!", //Database connection error
    });
  }
};

//Search Tag Function
