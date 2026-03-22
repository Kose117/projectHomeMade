import  express  from "express";
import cors from "cors";
import db from "./database/db.js";
import rutaUsuario from "./routes/usuario.route.js";
import rutaProfesional from "./routes/profesional.route.js";
import rutaReserva from "./routes/reserva.route.js";


const app=express();
app.use(cors({
    origin:"http://localhost:3000",
    methods:['GET','POST','PUT','DELETE']
}))
app.use(express.json())

//aca se usan las rutas
app.use("/",rutaUsuario)
app.use("/",rutaProfesional)
app.use("/",rutaReserva)





try {
    await db.authenticate()
    console.log("connection successfull");
} catch (error) {
    console.error({error})
}
const port=process.env.PORT||8000;
app.listen(port,()=>{
    console.log("sever running http localhost:"+port)
})

