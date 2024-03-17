import { cartService, productService } from "../repositories/index.repository.js"

export class CartController {
    constructor() {
        this.service = cartService
        this.serviceProduct = productService
    }
    getCarts = async (req, res) => {
        try {
            const allCarts = await this.service.getCarts()

            res.send({
                status: 'Success',
                result: allCarts
            })

        } catch (error) {
            console.log(error);
        }

    }

    getCartById = async (req, res) => {
        try {
            const { cid } = req.params;
            const cart = await this.service.getCartBy(cid);

            res.send({
                status: 'Success',
                result: cart
            })
        } catch (error) {
            console.log(error);
        }

    }

    createCart = async (req, res) => {
        try {
            // const {body} = req
            const newCart = await this.service.createCart()
            res.send({
                status: 'Success',
                result: newCart
            })
        } catch (error) {
            console.log(error);
        }

    }
    updateCart = async (req, res) => {
        try {
            const { cid, pid } = req.params
            const product = await this.serviceProduct.getProductBy(pid)
            const cart = await this.service.getCartBy(cid)

            cart.products.push({ product })
            let result = await this.service.updateCart(cid, cart)

            res.json({
                status: 'SUCCESS',
                result: result
            })
        } catch (error) {
            console.log(error);
        }
    }

    deleteCart = async (req, res) => {
        try {
            const { cid } = req.params
            const deleteCart = await this.service.deleteCart(cid)
            res.send({
                status: 'Success, cart delete'
            })
        } catch (error) {
            console.log(error);
        }

    }



}