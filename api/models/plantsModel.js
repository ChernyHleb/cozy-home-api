module.exports = ( sequelize, DataTypes ) => {
    const Plant = sequelize.define("plant", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        plant_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        product_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        plant_type: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        price: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        manufacturer_country: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Plant;
};