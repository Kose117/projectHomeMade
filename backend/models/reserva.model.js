import db from "../database/db.js";
import DataTypes from "sequelize";

const Reservas = db.define("Reservas", {
  id_reserva: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_profesional: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  costo: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  descripcion_gasto: {
    type: DataTypes.STRING(32),
    allowNull: true
  },
  monto_gasto: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  fecha_gasto: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

export default Reservas;
