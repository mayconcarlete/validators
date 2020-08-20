import { IValidator } from "./validator-interface";

export class LengthValidator implements IValidator{
    
    private readonly lengthMin:number
    private readonly lengthMax:number
    private readonly fieldName:string
    
    constructor(fieldName:string, lengthMin:number, lengthMax:number){
        this.lengthMin = lengthMin
        this.lengthMax = lengthMax
        this.fieldName = fieldName
    }
    
    validate(data: any): boolean {
        if(data[this.fieldName].length < this.lengthMin || data[this.fieldName].length > this.lengthMax)
        {
            return false
        }
        return true
    }

}