/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logradouro', {
    cep: {
      type: DataTypes.INTEGER(13),
      allowNull: false,
      primaryKey: true
    },
    logradouro: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bairro: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cidade: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    uf: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'logradouro',
    timestamps: false
  });
};
