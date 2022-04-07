const pool = require("../config/db.config");

var session;
//Create Tag Function

//Add Tag in Function

const add_tag_post = async (tags, p_id) => {
  console.log("Data Coming Here: ", tags, p_id);
  try {
    let tag_id = await pool.query(`select tag_id from tag where name = $1`, [
      tags,
    ]);
    tag_id = tag_id.rows[0].tag_id;
    const data = await pool.query(
      `INSERT INTO post_tags (tag_id, id) values ($1, $2) RETURNING *`,
      [tag_id, p_id]
    );
  } catch (err) {
    console.log(err);
  }
};

exports.create_post = async (req, res) => {
  const { name, describe, subscribe, retweet_user_id, user_id, tags_list } =
    req.body;
  try {
    // const { file } = req.body.file;
    // console.log(file);
    var img_src = "http://127.0.0.1:3000/images/" + "file.filename";
    console.log(img_src);
    const data = await pool.query(
      `INSERT INTO posts (name, img_src, describe, subscribe, retweet_user_id, user_id) values ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [name, img_src, describe, subscribe, retweet_user_id, user_id]
    );

    tags_list.forEach((element) => {
      add_tag_post(element, data.rows[0].id);
    });

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
  const { name, describe, subscribe, post_user_id, curr_user_id, tags_list } =
    req.body;
  try {
    var img_src = "http://127.0.0.1:3000/images/" + req.file.filename;
    const data = await pool.query(
      `INSERT INTO posts (name, img_src, describe, subscribe, retweet_user_id, user_id) values ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [name, img_src, describe, subscribe, curr_user_id, post_user_id]
    );
    tags_list.forEach((element) => {
      add_tag_post(element, data.rows[0].id);
    });

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
