module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["test1"] = {
        host: process.env.EndPoint_rdsTest1,
        port: process.env.Port_rdsTest1,
        user: process.env.User_rdsTest1,
        password: process.env.Password_rdsTest1,
        database: "test1sss"
    };
};