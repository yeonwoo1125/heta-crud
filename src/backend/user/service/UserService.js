/** @Service */
export class UserService {
    constructor() {
        /** @Inject('UserModel')*/
        this.userModel;
    }

    //유저 생성
    /** @Transactional */
    async createUser(name, age) {
        try {
            const user = await this.userModel.create({
                name: name,
                age: age
            });
            console.log(user.id);
            return user;
        } catch (e) {
            console.error(e);
        }
    }

    //유저 목록 조회
    /** @Transactional */
    async getUsers() {
        try {
            return await this.userModel.findAll();
        } catch (e) {
            console.error(e);
        }
    }

    //유저 상세 조회
    /** @Transactional */
    async getUserById(id) {
        try {
            return await this.userModel.findByPk(id);
        } catch (e) {
            console.error(e);
        }
    }

    //유저 정보 수정
    /** @Transactional */
    async updateUser(id, name, age) {
        try {
            await this.userModel.update(
                {
                    name: name,
                    age: age
                },
                {
                    where: {id: id}
                }
            );

            return await this.userModel.findByPk(id);
        } catch (e) {
            console.error(e);
        }
    }

    //유저 삭제
    /** @Transactional */
    async deleteUser(id){
        try{
            await this.userModel.destroy({
                where : {id : id}
            });

            return await this.userModel.findAll();
        }catch (e) {
            console.error(e);
        }
    }
}