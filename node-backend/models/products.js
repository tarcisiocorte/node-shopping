export default (sequelize, DataType) => sequelize.define('Products', {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
      type: DataType.DOUBLE,
      allowNull: false,
      validate: {
          notEmpty: true,
      },
  },
});
