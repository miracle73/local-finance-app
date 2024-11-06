import { Model } from "@nozbe/watermelondb";
import { field, readonly, date, writer } from '@nozbe/watermelondb/decorators';
import { allocationsCollection } from "../db";
export default class Allocation extends Model {
    static table = "allocations"
    @field('income') income!: number;
    @readonly @date('created_at') created_at!: Date;

    @writer static async create(income: number) {
       return await allocationsCollection.create((newAllocation) => {
            newAllocation.income = income
        })
    }
    
}