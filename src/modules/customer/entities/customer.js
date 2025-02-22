import { Schema , model } from "mongoose";
import { timestamp } from "../../../core/plugins/timestamp.js";
import validator from "validator";

const customerSchema = new Schema(
    {
        firstName: { type: String, required: true, uppercase:true },
        lastName: { type: String, required: true, uppercase:true },
        email: { 
          type: String, required: true, unique: true,
          validate:{
            validator:(value) => validator.isEmail(value),
            message:(props) => `${props.value} n'est pas une adresse email valide!`}
         },
        address: { type: String, required: true }
      }
)

customerSchema.plugin(timestamp)
export const Customer = model("customer",customerSchema)