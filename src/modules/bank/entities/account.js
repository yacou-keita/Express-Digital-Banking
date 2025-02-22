import { AccountStatus } from "./accountStatus.js";
import { Schema , model } from "mongoose";
import { timestamp } from "../../../core/mongoose/plugins/timestamp.js";


const accountSchema = new Schema({
        name: { type: String, required: true, uppercase:true },
        poneNumber: { type: String, required: true, unique:true },
        balance: { type: Number, default:0 },
        status: { 
          type: String, required: true,enum: Object.values(AccountStatus)
      }
    })

accountSchema.plugin(timestamp)
export const Account = model("accounts",accountSchema)