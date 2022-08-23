import {HetaSequelize} from 'hetamvc'

/** @Model */
export default class User extends HetaSequelize {
    init(Sequelize, options) {

        return this.model('user', {
                name: {
                    type: Sequelize.STRING(20),
                    allowNull: false
                },
                age: {
                    type: Sequelize.INTEGER.UNSIGNED,
                    allowNull: false
                },
                email: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                    unique: true
                },
            },
            {
                options,
                timestamps : false
            }
        );
    }

     associate(models){
        this.hasMany(models.Memo,{
            foreignKey : 'user_id',
            sourceKey : 'id'
        })
    }
}