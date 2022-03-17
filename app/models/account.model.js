module.exports = (sequelize, Sequelize) => {
  const Account = sequelize.define("account", {
    user_id: {
      type: Sequelize.INTEGER,
    },
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });
  return Account;
};
