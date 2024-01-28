import { Router } from 'express'
import usersModel from '../dao/models/users.model.js'
import productsModel from '../dao/models/products.model.js'
const router = Router()

router.get('/', (req, res) => {
    res.render('index', {})
})
router.get('/users', async (req, res) => {   //utilizo '/users' porque estoy en la vista principal
    const { limit = 10, pageQuery = 1 } = req.query
    const {
        docs,
        hasPrevPage,
        hasNextPage,
        prevPage,
        nextPage,
        page

    } = await usersModel.paginate({}, { limit, page: pageQuery, lean: true })     //lean en true para usar un objmongoos en js
    //primero es para los filtros

    res.render('users', {
        users: docs,
        hasPrevPage,
        hasNextPage,
        prevPage,
        nextPage,
        page
    })

})
router.get('/products', async (req, res) => {
    
        const { limit = 10, pageQuery = 1, } = req.query
        const {
            docs,
            hasPrevPage,
            hasNextPage,
            prevPage,
            nextPage,
            page

        } = await productsModel.paginate({}, { limit, page: pageQuery,lean: true })

        res.render('products',
            {
                products: docs,
        hasPrevPage,
        hasNextPage,
        prevPage,
        nextPage,
        page
            }
        )
   
})
export default router