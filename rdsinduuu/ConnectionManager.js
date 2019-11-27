module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["ooo"] = {
        host: process.env.EndPoint_rdsOoo,
        port: process.env.Port_rdsOoo,
        user: process.env.User_rdsOoo,
        password: process.env.Password_rdsOoo,
        database: "ooooo"
    };
};