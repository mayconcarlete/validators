import {LengthValidator} from './validators'

const httpRequest = {
    body:{
        name:"Maycon"
    }
}
const nameValidator = new LengthValidator('name', 2, 20)

const result = nameValidator.validate(httpRequest.body)
console.log(result)

