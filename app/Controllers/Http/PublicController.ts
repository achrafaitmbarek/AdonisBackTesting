import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import StoreCoolFormValidator from 'App/Validators/StoreCoolFormValidator'

export default class PublicController {
  public async homepage() {
    return 'hello world'
  }

  public async renderForm({ view }: HttpContextContract) {
    return await view.render('renderForm')
  }

  public async processForm({ request, response }: HttpContextContract) {
    const payload = await request.validate(StoreCoolFormValidator)
    console.log(payload)
    return response.redirect().back()
  }
}
