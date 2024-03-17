import { ticketService, productService } from "../repositories/index.repository.js"

export class TicketController {
    constructor() {
        this.service = ticketService
        this.serviceProduct = productService
    }
    getTicket = async (req, res) => {
        try {
            const allCarts = await this.service.getTickets()

            res.send({
                status: 'Success',
                result: allCarts
            })

        } catch (error) {
            console.log(error);
        }

    }

    getTicketBy = async (req, res) => {
        try {
            const { cid } = req.params;
            const cart = await this.service.getTicketBy(cid);

            res.send({
                status: 'Success',
                result: cart
            })
        } catch (error) {
            console.log(error);
        }

    }

    createTicket = async (req, res) => {
        try {
            const {amount} = req.body
            const newTicket = {amount}
            const result = await this.service.createTicket(newTicket)
            res.send({
                status: 'Success',
                result: result
            })
        } catch (error) {
            console.log(error);
        }

    }
    updateTicket = async (req, res) => {
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

    deleteTicket = async (req, res) => {
        try {
            const { cid } = req.params
            const deleteCart = await this.service.deleteTicket(cid)
            res.send({
                status: 'Success, cart delete'
            })
        } catch (error) {
            console.log(error);
        }

    }



}