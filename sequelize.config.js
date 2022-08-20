module.exports = {
    dialect: "mysql",
    username: "root",
    password: "3bfdad8cbd0bbd4f8a3aeb16d115b4fe",
    passKey: "q1w2e3",
    database: "heta_crud",
    host: "localhost",
    port: 3306,
    logging: true,
    force: false,
    operatorsAliases: false,
    timezone: "-08:00",
    dialectOptions: {
        charset: 'utf8mb4',
        dateStrings: true,
        typeCast: true
    },
    define: {
        freezeTableName: true,
        timestamps: false
    },
    pool: {
        max: 20,
        min: 5,
        idle: 10000
    }
};