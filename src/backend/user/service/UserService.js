/** @Service */

export class UserService {
    constructor() {
        /** @Inject('UserModel')*/
        this.userModel;
    }

    //유저 생성
    /** @Transactional */
    createUser(name, age, email) {
        try {
            const user = findByUserEmail(email, this.userModel)
            if (user !== null) return false;

            return this.userModel.create({
                name: name,
                age: age,
                email: email
            });
        } catch (e) {
            console.error(e);
        }
    }

    //유저 목록 조회
    /** @Transactional */
    getUsers() {
        try {
            return this.userModel.findAll();
        } catch (e) {
            console.error(e);
        }
    }

    //유저 상세 조회
    /** @Transactional */
    getUserById(id) {
        try {
            return this.userModel.findByPk(id);
        } catch (e) {
            console.error(e);
        }
    }

    //유저 정보 수정
    /** @Transactional */
    updateUser(id, name, age) {
        try {
            let user = this.userModel.findByPk(id);
            if (user === null) return false;

            this.userModel.update(
                {
                    name: name,
                    age: age
                },
                {
                    where: {id: id}
                }
            )

            user = this.userModel.findByPk(id);
            return user;
        } catch (e) {
            console.error(e);
        }
    }

    //유저 삭제
    /** @Transactional */
    deleteUser(id) {
        try {
            let user = this.userModel.findByPk(id);
            if (user === null) return false;


            this.userModel.destroy({
                where: {id: id}
            });

            return this.userModel.findAll();
        } catch (e) {
            console.error(e);
        }
    }

}

const findByUserEmail = async (email, model) => {
    return await model.findOne({
        where: {email: email},
        raw: true
    });
}
