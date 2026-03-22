import db from "../database/db.js";
import DataTypes from "sequelize";
import reserva from "./reserva.model.js";

const Usuario = db.define("Usuario", {
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_usuario: {
    type: DataTypes.STRING(32),
    allowNull: true
  },
  apellido_usuario: {
    type: DataTypes.STRING(32),
    allowNull: true
  },
  correo_usuario: {
    type: DataTypes.STRING(64),
    allowNull: false,
    unique: true
  },
  contrasena_usuario: {
    type: DataTypes.STRING(128),
    allowNull: false
  }
});

Usuario.hasMany(reserva,{foreignKey:"id_usuario"})
reserva.belongsTo(Usuario,{foreignKey:"id_usuario"})
export default Usuario;