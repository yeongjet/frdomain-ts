import {
    Model,
    Table,
    Column,
    PrimaryKey,
    AllowNull,
    Comment,
    DataType
} from 'sequelize-typescript'
import { Currency as CurrencyType } from '../definition'
import { DataTypes } from 'sequelize/types'

@Table({
    tableName: 'currency',
    timestamps: false
})
export class Currency extends Model<Currency> {
    @Comment('币种id')
    @PrimaryKey
    @Column({ type: DataType.INTEGER, field: 'currency_id' })
    currencyId: number

    @Comment('币种名称')
    @AllowNull(false)
    @Column(DataTypes.TEXT)
    name: string

    @Comment('币种缩写')
    @AllowNull(false)
    @Column(DataTypes.TEXT)
    abbreviate: CurrencyType
}
