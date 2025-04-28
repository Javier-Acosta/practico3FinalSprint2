import mongoose from 'mongoose';
import colors from 'colors'
import { exit } from 'node:process'

export async function connectDB() {
    try {
        await mongoose.connect(
            'mongodb+srv://root:wm84Gyyg3jQwx4BJ@cluster0.0owpnim.mongodb.net/AppFinal', {
                serverSelectionTimeoutMS: 5000
                    // useNewUrlParser: true,
                    // useUnifiendTopology: true
            }
        );
        console.log(colors.magenta.bold('Conexión exitosa a MongoDB'));
    } catch (error) {
        console.error(colors.bgRed.bold('Error al conectar a MongoDB'));
        exit(1);
    }
}


// mongoose.connect('mongodb+srv://grupo-01:grupo01@cursadanodejs.ls9ii.mongodb.net/Node-js', { serverSelectionTimeoutMS: 5000 })