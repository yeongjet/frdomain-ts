import {
    Model,
    Table,
    Column,
    PrimaryKey,
    AllowNull,
    Comment,
    DataType,
    CreatedAt,
    UpdatedAt
} from 'sequelize-typescript'

@Table({
    tableName: 'account',
    indexes: [
        {
            fields: ['no']
        }
    ]
})
export class Account extends Model<Account> {
    @Comment('账号id')
    @PrimaryKey
    @Column({ type: DataType.INTEGER, field: 'account_id' })
    accountId: number

    @Comment('账号no')
    @AllowNull(false)
    @Column(DataType.TEXT)
    no: string

    @Comment('账号名称')
    @AllowNull(false)
    @Column(DataType.TEXT)
    name: string

    @Comment('账号余额')
    @AllowNull(false)
    @Column(DataType.INTEGER)
    balance: number

    @Comment('账号启用时间')
    @AllowNull(false)
    @Column(DataType.TIME)
    openAt: Date

    @Comment('账号停用时间')
    @AllowNull(true)
    @Column(DataType.TIME)
    closeAt: Date

    @Comment('账号创建时间')
    @CreatedAt
    createdAt: Date

    @Comment('账号更新时间')
    @UpdatedAt
    updatedAt: Date
}
