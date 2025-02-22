import { config } from "dotenv";

config()

export const environnments = {
    port: process.env.port,
    database: process.env.database,
    baseUrl: process.env.baseUrl,
    url:function (){return  `${this.baseUrl}:${this.port}/${this.database}`}
}

  

