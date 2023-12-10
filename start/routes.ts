import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import Route from '@ioc:Adonis/Core/Route'

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()

  return report.healthy ? response.ok(report) : response.badRequest(report)
})

Route.get('/', 'PublicController.homepage')

Route.get('/form', 'PublicController.renderForm')
Route.post('/form', 'PublicController.processForm')
