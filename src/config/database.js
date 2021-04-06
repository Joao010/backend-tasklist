// database config
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '',
  database: 'tasklist',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
