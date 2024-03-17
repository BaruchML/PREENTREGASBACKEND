import {Router} from 'express'
import { TicketController } from '../controllers/ticket.controller.js'

const router = Router()
const { 
    getTicket,
    getTicketBy,
    createTicket,
    updateTicket,
    deleteTicket} = new TicketController()
router
    .get('/', getTicket)
    .get('/:tid',getTicketBy )
    .post('/',createTicket)
    //meter 1 producto a un array de un carrito
    .put('/:tid/:pid', updateTicket)
    .delete('/:tid',deleteTicket)

export default router