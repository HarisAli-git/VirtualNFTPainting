const pool = require("../config/db.config");

//Create Tag Function
exports.create_tag = async (req, res) => {
  const { name } = req.body;
  try {
    const data = await pool.query(`SELECT * FROM tag WHERE name= $1;`, [name]); //Verifying if the tag exists in the database
    const tags = data.rows;
    if (tags.length > 0) {
      res.status(400).json({
        error: "Tag is already added",
      });
    } else {
      const data = await pool.query(
        `INSERT INTO tag (name) values ($1) RETURNING *`,
        [name]
      );
      res.status(200).json({
        message: "Tag added",
        data: data.rows,
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
exports.view_tag = async (req, res) => {
  try {
    const data = await pool.query(`SELECT * FROM tag`); //Verifying if the tag exists in the database
    const tags = data.rows;
    if (tags.length == 0) {
      res.status(400).json({
        error: "No Tags Found",
      });
    } else {
      res.status(200).json({
        data: data.rows,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Database error occurred while searching tag!", //Database connection error
    });
  }
};

//Search Tag Function
exports.get_post_tag = async (req, res) => {
  const { p_id } = req.body;
  try {
    const data = await pool.query(`SELECT * FROM post_tags where id = $1`, [
      p_id,
    ]); //Verifying if the tag exists in the database

    res.status(200).json({
      data: data.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Database error occurred while searching tag in posts!", //Database connection error
    });
  }
};
