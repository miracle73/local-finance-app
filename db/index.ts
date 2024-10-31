import { Platform } from "react-native";
import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite"
import schema from "./schema";
import migrations from "./migrations";
import Account from "../model/Account";
import Allocation from "../model/Allocation";

const adapter = new SQLiteAdapter({
    schema,
    // migrations,
    jsi: Platform.OS == "ios" && true,
    onSetUpError: error => {

    },
  
})

const database = new Database({
    adapter,
    modelClasses: [
        Account,
        Allocation
    ]
})
export default database
export const accountsCollection = database.get("accounts")
export const allocationsCollection = database.get("allocations")