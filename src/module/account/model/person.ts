import { Table, Column, Model, HasMany } from 'sequelize-typescript'
import { Book } from './book'

@Table({
  tableName: 'person'
})
export class Person extends Model<Person> {
 
  @Column
  name: string;
 
  @Column
  age: number;
 
  @HasMany(() => Book)
  book: Book[];
}