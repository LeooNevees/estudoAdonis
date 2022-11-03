import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cep: string

  @column()
  public logradouro: string

  @column()
  public complemento: string | null

  @column()
  public bairro: string | null

  @column()
  public uf: string | null

  @column()
  public ibge: string | null

  @column()
  public gia: string | null

  @column()
  public ddd: string | null

  @column()
  public siafi: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
