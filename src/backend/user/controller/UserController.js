/** @Controller*/
/** @RequestMapping ('/users') */
export class UserController {
    constructor() {
        /** @Inject('UserService')*/
        this.userService;
    }

    //유저 생성
    /** @RequestMapping('/', post) */
    createUser(req, res) {
        const {name, age, email} = req.body;
        const user = this.userService.createUser(name, age * 1, email);
        if(!user){
            return res.send({
                msg : '이미 사용하는 이메일'
            });
        }

        return res.send(user);
    }

    //유저 목록 조회
    /** @RequestMapping('/', get)*/
    findAllUser(req, res) {
        const list = this.userService.getUsers();
        return res.send(list);
    }

    //유저 상세 조회
    /** @RequestMapping('/:userId', get) */
    findUser(req, res) {
        const userId = req.params.userId * 1;
        const user = this.userService.getUserById(userId);
        if(!user){
            return res.send({
                msg : '유저 없음'
            });
        }

        return res.send(user);
    }

    //유저 정보 수정
    /** @RequestMapping('/:userId', put) */
    updateUser(req, res) {
        const userId = req.params.userId * 1;
        const name = req.body.name;
        const age = req.body.age * 1;
        const user = this.userService.updateUser(userId, name, age);

        if(!user){
            return res.send({
                msg : '유저 없음'
            });
        }

        return res.send(user);
    }

    //유저 삭제
    /** @RequestMapping('/:userId', delete)*/
    deleteUser(req, res) {
        const userId = req.params * 1;
        const list = this.userService.deleteUser(userId);

        if(!list){
            return res.send({
                msg : '유저 없음'
            });
        }

        return res.json(list);
    }
}