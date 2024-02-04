import { Router } from 'express'
import productsModel from '../dao/models/products.model.js'
const router = Router()

router
    .get('/', async (req, res) => {

        try {
            // const { limit = 10, pageQuery = 1, sort = 0, query = '' } = req.query
            // const {
            //     status,
            //     payload,
            //     totalPages,
            //     prevPage,
            //     nextPage,      
            //     hasPrevPage,
            //     hasNextPage,
            //     prevLink,
            //     nextLink,      

            //     docs,
            //     page         
        
            // }  = await productsModel.paginate({},{limit,page:pageQuery,sort:sort,query:query,lean:true})
            // const allProducts = await productsModel.paginate({}, { limit: 20, page: 2, sort: { first_name: -1 }, lean: true })

            res.send(
                console.log('Todo bien x2')
                // {
                //     status:'Success',
                //     payload:docs,
                //     totalPages,
                // prevPage,
                // nextPage,      
                // hasPrevPage,
                // hasNextPage,
                // prevLink,
                // nextLink,      


                // }
            )


        } catch (error) {
            console.log(error);
        }
    })

    .post('/', async (req, res) => {
        try {
            // const { body } = req
            const result = await productsModel.create({
                title: 'Producto Diez',
                description: 'Este es un producto',
                price: 110,
                stock: 70
            })
            res.send({
                status: 'Success',
                result: result
            })
        } catch (error) {
            console.log(error);
        }

    })

    .get('/:pid', async (req, res) => {
        try {
            const { pid } = req.params;
            const product = await productsModel.find({ _id: pid });

            res.send({
                status: 'Success',
                result: product
            })
        } catch (error) {

        }

    })
    .put('/:pid', async (req, res) => {
        try {
            const { pid } = req.params

            const promocion = await productsModel.findByIdAndUpdate({ _id: pid }, ({ $mul: { price: .80 } }))
            res.send({
                status: 'Success',
                promo: '20% de descuento',
                result: promocion
            })
        } catch (error) {

        }

    })
    .delete('/:pid', async (req, res) => {
        try {
            const { pid } = req.params
            const deleteProd = await productsModel.findByIdAndUpdate({ _id: pid }, ({ isActive: false }))
            res.send({
                status: 'Success, product delete'
            })
        } catch (error) {

        }


    })


export default router