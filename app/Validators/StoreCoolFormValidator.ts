import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CustomMessages, rules, schema } from '@ioc:Adonis/Core/Validator'

export default class StoreCoolFormValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    firstname: schema.string(),
    lastname: schema.string(),
    email: schema.string([rules.email()]),
    phone: schema.string([rules.mobile({ locale: ['fr-FR'] })]),
  })

  public messages: CustomMessages = {
    'firstname.required': 'Merci de renseigner un prénom',
    'lastname.required': 'Merci de renseigner un nom',
    'email.required': 'Merci de renseigner un email',
    'phone.required': 'Merci de renseigner un téléphone',
    'email.email': 'Merci de reseigner un email valide',
    'phone.mobile': 'Merci de renseigner un téléphone valide',
  }
}
