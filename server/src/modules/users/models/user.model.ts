import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table
export class User extends Model<User>{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    userId: number;

    @Column({type: DataType.STRING, allowNull: true})
    name: string

    @Column({type: DataType.STRING, allowNull: true})
    photo: string

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string

    @Column({type: DataType.STRING, unique: false, allowNull: false})
    password: string
    // @ForeignKey(()=>Company)
    // @Column({type: DataType.INTEGER})
    // companyId: number;
    // @BelongsTo(()=> Company)
    // company: Company
    //
    // @BelongsToMany(()=> Team, {
    //     through: ()=>TeamsPersons,
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE'
    // })
    // teams: Team[];


}
