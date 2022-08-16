module.exports = {
  dialect: "sqlite",
  force: false,
  operatorsAliases: false,    
  dialectOptions: {
      charset: 'utf8mb4',
      dateStrings: true,
      typeCast: true
  },
  define: {
      freezeTableName: true,
      timestamps: false
  },
  pool:{
      max:20,
      min:5,
      idle:10000
  },
  storage: __dirname+"/db.sqlite"
};