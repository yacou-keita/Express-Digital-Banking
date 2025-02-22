import { connect, disconnect } from "mongoose";

class Database {

     createConnection(url){
        connect(url)
        .then(() => console.log(`Connecté avec succès:${url}`))
        .catch(() => console.log(`echec de la connection:${url}`))
    }

     closeConnection(){
        disconnect()
       .then(() => console.log("Déconnecté avec succès"))
       .catch(() => console.log("Déconnection echoué"))
    }
}

process.on("SIGINT", async () => {
    database.closeConnection()
    process.exit(0);
});

export const database = new Database()