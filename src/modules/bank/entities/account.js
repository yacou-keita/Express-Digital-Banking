import { AccountStatus } from "./accountStatus.js";
import { Schema , model } from "mongoose";
import { timestamp } from "../../../core/plugins/timestamp.js";


const accountSchema = new Schema(
    {
        name: { type: String, required: true, uppercase:true },
        balance: { type: Number, default:0 },
        status: { 
          type: String, required: true, unique: true,enum: Object.values(AccountStatus)
      }
    }
)

accountSchema.plugin(timestamp)
export const Account = model("accounts",accountSchema)