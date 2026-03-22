import db from "../database/db.js";
import DataTypes from "sequelize";
import reserva from "./reserva.model.js";

const Profesional = db.define("Profesional", {
  id_profesional: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_profesional: {
    type: DataTypes.STRING(32),
    allowNull: false
  },
  apellido_profesional: {
    type: DataTypes.STRING(32),
    allowNull: false
  },
  cedula_profesional: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  correo_profesional: {
    type: DataTypes.STRING(64),
    allowNull: false,
    unique: true
  },
  contrasena_profesional: {
    type: DataTypes.STRING(128),
    allowNull: false
  },
  usuario:
  {
    type: DataTypes.STRING(32),
    allowNull: false,
    unique: true
  },
  categoria_profesional:
  {
      type: DataTypes.STRING(32)
  },
  titulo_profesional:
  {
    type: DataTypes.STRING(32)
  },
  calificacion_profesional:
  {
    type:DataTypes.INTEGER,
    allowNull: false,
  },
  subcategoria_profesional:
  {
    type: DataTypes.STRING(32)
  },
  ruta_imagen:
  {
    type: DataTypes.STRING(255)
  }


});
Profesional.hasMany(reserva,{foreignKey:"id_profesional"})
reserva.belongsTo(Profesional,{foreignKey:"id_profesional"})
export default Profesional;
