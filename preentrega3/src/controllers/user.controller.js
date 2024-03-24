import { userService, cartService } from "../repositories/index.repository.js";

export class UserController {
    constructor() {
        this.services = userService
        this.serviceCart = cartService
    }
    getUsers = async (req, res) => {
        try {
            const users = await this.services.getUsers()

            console.log(users);

            res.send(users)

        } catch (error) {
            console.log(error);
        }

    }
    getUser = async (req, res) => {
        try {
            const { uid } = req.params;
            const user = await this.services.getUserById(uid);

            res.send({
                status: 'Success',
                result: user
            })
        } catch (error) {
            console.log(error)
        }
    }
    createUser = async (req, res) => {
        try {
            const { first_name, last_name, email, age, password, role } = req.body
            let carts = []
            const newUser = {
                first_name,
                last_name,
                email,
                age,
                password,
                role,
                carts
            }
            const newCart = {
                title:`${newUser.first_name} Cart`,
                emailUser: `${newUser.email}`
        }
            const cartDao = await this.serviceCart.createCart(newCart)
            const cart = await this.serviceCart.getCartBy({emailUser:`${newUser.email}`})
           
            const user = await this.services.createUser(newUser)
            const userDao = await this.services.getUserBy({email:`${newUser.email}`})
            userDao.carts.push({cart})
            const finallUser = await this.services.updateUser(userDao._id,userDao)

            res.send({
                status: 'Success',
                usersCreate: finallUser
            })
        } catch (error) {
            console.log(error);
        }

    }
    updateUser = async (req, res) => {
        try {
            const { uid } = req.params
            const userToUpdate = req.body

            const result = await this.services.updateUser(uid, userToUpdate)
            res.send({
                status: 'Success',
                message: result,

            })
        } catch (error) {
            console.log(error)
        }

    }
    deleteUser = async (req, res) => {
        try {
            const { uid } = req.params
            const result = await this.services.deleteUser(uid)
            res.send({
                status: 'Success, product delete'
            })
        } catch (error) {

        }

    }
}

