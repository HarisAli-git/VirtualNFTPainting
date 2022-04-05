const pool = require("../config/db.config");

var session;
//Create Tag Function
exports.create_post = async (req, res) => {
  const { name, img_src, describe, subscribe, retweet_user_id, user_id } =
    req.body;
  try {
    const data = await pool.query(
      `INSERT INTO posts (name, img_src, describe, subscribe, retweet_user_id, user_id) values ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [name, img_src, describe, subscribe, retweet_user_id, user_id]
    );
    res.status(200).json({
      message: "Post added",
      data: data.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Database error occurred while creating post!", //Database connection error
    });
  }
};

exports.view_user_posts = async (req, res) => {
  const { user_id } = req.body;
  try {
    const data = await pool.query(`SELECT * from posts where user_id = $1`, [
      user_id,
    ]);
    res.status(200).json({
      data: data.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Database error occurred while searching posts!", //Database connection error
    });
  }
};

exports.get_posts = async (req, res) => {
  try {
    const data = await pool.query(`SELECT * from posts where subscribe = 0`);
    res.status(200).json({
      data: data.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Database error occurred while searching posts!", //Database connection error
    });
  }
};

exports.RetweetPost = async (req, res) => {
  const { name, img_src, describe, subscribe, post_user_id, curr_user_id } =
    req.body;
  try {
    const data = await pool.query(
      `INSERT INTO posts (name, img_src, describe, subscribe, retweet_user_id, user_id) values ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [name, img_src, describe, subscribe, curr_user_id, post_user_id]
    );
    res.status(200).json({
      message: "Post added",
      data: data.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Database error occurred while creating post!", //Database connection error
    });
  }
};
