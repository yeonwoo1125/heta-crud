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
        const name = req.body.name;
        const age = req.body.age * 1;
        const user = this.userService.createUser(name, age);
        res.send(user);
    }

    //유저 목록 조회
    /** @RequestMapping('/', get)*/
    findAllUser(req, res){
        const list = this.userService.getUsers();
        res.send(list);
    }

    //유저 상세 조회
    /** @RequestMapping('/:userId', get) */
    findUser(req, res){
        const userId = req.params.userId;
        const user = this.userService.getUserById(userId);

        res.send(user);
    }

    //유저 정보 수정
    /** @RequestMapping('/:userId', put) */
    updateUser(req, res){
        const userId = req.params.userId;
        const name = req.body.name;
        const age = req.body.age * 1;
        const user = this.userService.updateUser(userId, name, age);

        res.send(user);
    }

    //유저 삭제
    /** @RequestMapping('/:userId', delete)*/
    deleteUser(req, res){
        const userId = req.params.userId;
        const list = this.userService.deleteUser(userId);

        res.send(list);
    }
}