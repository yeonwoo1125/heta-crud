import {HetaSequelize} from 'hetamvc'

/** @Model */
export default class MemoModel extends HetaSequelize {
    init(Sequelize, options) {

        return this.model('memo', {
                id: {
                    type: Sequelize.INTEGER.UNSIGNED,
                    primaryKey: true,
                    autoIncrement: true
                },
                title: {
                    type: Sequelize.STRING(50),
                    allowNull: false
                },
                content: {
                    type: Sequelize.STRING(200),
                    allowNull: false
                }
            },
            {
                options,
                timestamps : true
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.UserModel);
    }
}