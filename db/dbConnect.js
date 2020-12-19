import mongoose from 'mongoose'

const connection = {};

async function dbConnect(){
  mongoose.connect('mongodb+srv://ciadorelogio:@lugano2020@cluster0.3twtx.mongodb.net/Cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once('open', function(){
    console.log('Banco de Dados conectado!');
  }).on('error', function(error){
      console.log('Eerro no Banco de Dados ->\n ', error);
  });

}

export default dbConnect