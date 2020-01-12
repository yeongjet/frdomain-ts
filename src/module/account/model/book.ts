import { Table, Column, Model, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { Person } from './person'

@Table({
  tableName: 'book'
})
export class Book extends Model<Book> {

  @Column
  name: string;
 
  @Column
  author: string;

  @ForeignKey(() => Person)
  @Column
  personId: number;
 
  @BelongsTo(() => Person)
  person: Person;
}