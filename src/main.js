import { database } from "./core/mongoose/database.js";
import  {environnments}  from "./core/constants/enveronnment.js";
import { Customer } from "./modules/customer/entities/customer.js";
import { Account } from "./modules/bank/entities/account.js";
import { AccountStatus } from "./modules/bank/entities/accountStatus.js";



database.createConnection(environnments.url())



const custumer = new Customer({
    firstName: 'Yacou',
    lastName: 'Keita',
    email: 'yacou@example.com',
    address: 'Abidjan, Côte d\'Ivoire',
})

const account = new Account(
    {
        name: 'COMPTE ÉPARGNE',
        balance: 5000,
        status: AccountStatus.ACTIVATED,
        poneNumber:"+225030203040"
      }
)

// custumer.save()
account.save()







