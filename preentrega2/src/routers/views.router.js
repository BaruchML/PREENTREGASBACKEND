import { Router, query } from 'express'
import usersModel from '../dao/models/users.model.js'
import productsModel from '../dao/models/products.model.js'
const router = Router()

router.get('/', (req, res) => {
    res.render('index', {})
})
router.get('/users', async (req, res) => {   //utilizo '/users' porque estoy en la vista principal
    const { limit = 10, pageQuery = 1, } = req.query
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
    
    //solo filtra por precio, aun no asigno categorias
    const { limit = 10, pageQuery = 1, queryParam = ''} = req.query
    if (queryParam != '') {
       
        const {
            docs,
            hasPrevPage,
            hasNextPage,
            totalPages,
            prevPage,
            nextPage,
            page

        } = await productsModel.paginate({price:queryParam}, { limit, page: pageQuery, lean: true})
       let linkLimit = limit
        res.render('products',
            {
                status: "succes",
                payload: docs,
                totalPages,
                prevPage,
                nextPage,
                page,
                hasPrevPage,
                hasNextPage,
                linkLimit
            }
        )
        console.log(docs);

    } else {
            const {
                docs,
                hasPrevPage,
                hasNextPage,
                totalPages,
                prevPage,
                nextPage,
                page

            } = await productsModel.paginate({}, { limit, page: pageQuery, lean: true })
            let linkLimit = limit
            res.render('products',
                {
                    status: "succes",
                    payload: docs,
                    totalPages,
                    prevPage,
                    nextPage,
                    page,
                    hasPrevPage,
                    hasNextPage,
                    linkLimit
                 
                }
            )
            console.log(docs);
        } 
})
export default router