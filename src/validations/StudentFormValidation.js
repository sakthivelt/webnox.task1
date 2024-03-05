import Joi from 'joi'

const StudentSchema=Joi.object({
    firsName:Joi.string().required(),
    lastName:Joi.string().required(),
    mobileNo:Joi.string().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must have 10 digits.`}).required(),
    email: Joi.string().email({tlds:{allow: false}}).required(),
    dob:Joi.date().required(),
    gender:Joi.string().required(),
    address:Joi.string().required()
})

export function studentFormValidator(data){
    console.log(data)
    return StudentSchema.validate(data)
   
}

// let studentSchema = Yup.object({
//     firsName: Yup.string().required(),
//     lastName: Yup.string().required(),
//     mobileNo: Yup.string().pho
//     email: string().email(),
//     website: string().url().nullable(),
//     createdOn: date().default(() => new Date()),
//   });