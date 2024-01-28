import {connect} from 'mongoose'


export const connectDB = async () =>{
    try {
        await connect('mongodb+srv://BARUCH123:TpLnR78wIzFREIlj@cluster0.magd2k2.mongodb.net/preentrega2?retryWrites=true&w=majority')
        // await connect('mongodb://127.0.0.1:27017/preentrega2')
        console.log('base de datos connected');
    } catch (error) {
        console.log(error);
    }
}
