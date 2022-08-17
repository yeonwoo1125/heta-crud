import {HetaSequelize} from 'hetamvc'

/** @Model */
export default class UserModel extends HetaSequelize {
    init(Sequelize, options) {

        return this.model('user', {
                id: {type: Sequelize.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true},
                name: {type: Sequelize.STRING(200), allowNull: false},
                age: {type: Sequelize.INTEGER.UNSIGNED, allowNull: false}
            },
            options
        );

    }

    static associate(models) {
    }
}