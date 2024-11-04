import mongoose from    'mongoose';

export async function connectDB(){
    try{
        await mongoose.connect(
            'mongodb+srv://Grupo-01:grupo01@cursadanodejs.ls9ii.mongodb.net/Node-js', {
                useNewUrlParser:true,
                useUnifiendTopology:true
            }
        );
        console.log('Conexión exitosa a MongoDB');
    } catch (error){
        console.error('Error al conectar a MongoDB', error);
        procces.exit(1);
    }
}