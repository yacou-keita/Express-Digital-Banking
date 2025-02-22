import { database } from "./core/database.js";
import  {environnments}  from "./core/constants/enveronnment.js";


database.createConnection(environnments.url())



