module.exports = (sequelize, DataTypes) => {
    const UserTrx = sequelize.define('UserTrx', {
        id: {
            type: DataTypes.INTEGER(20),
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        firstname: DataTypes.STRING(30),
        lastname: DataTypes.STRING(30),
        email: DataTypes.STRING(100),
        item: DataTypes.STRING(100),
        quantity: DataTypes.INTEGER(11),
        total_price: DataTypes.DECIMAL(11)
    }, {
        tableName: 'fd_user_trx',
        timestamps: false,
        underscored: true,
    });

    return UserTrx;
}
