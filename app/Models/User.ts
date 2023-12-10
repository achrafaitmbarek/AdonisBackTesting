import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, HasMany, beforeSave, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import { randomUUID } from 'node:crypto'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid: string

  @column()
  public firstname: string

  @column()
  public lastname: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @hasMany(() => User, { foreignKey: 'createdById' })
  public createdBy: HasMany<typeof User>

  @column()
  public createdById: number

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => User, { foreignKey: 'updatedById' })
  public updatedBy: HasMany<typeof User>

  @column()
  public updatedById: number

  @column.dateTime()
  public deletedAt: DateTime | null

  @hasMany(() => User, { foreignKey: 'deletedById' })
  public deletedBy: HasMany<typeof User>

  @column()
  public deletedById: number

  constructor() {
    super()
    this.uuid = randomUUID()
  }

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
