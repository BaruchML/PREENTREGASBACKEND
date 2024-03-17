import { productService } from "../repositories/index.repository.js"

export class ProductController {
    constructor() {
        this.services = productService
    }
    getProducts = async (req, res) => {
        try {
            const allProducts = await this.services.getProducts()
            res.send({
                status: 'Success',
                payload: allProducts
            })
        } catch (error) {
            console.log(error);
        }
    }
    getProduct = async (req, res) => {
        try {
            const { pid } = req.params;
            const product = await this.services.getProductBy(pid);
            res.send({
                status: 'Success',
                result: product
            })
        } catch (error) {
            console.log(error);
        }
    }
    createProduct = async (req, res) => {
        try {
            const { title, description, price, stock,quantity } = req.body
            const newProduct = { title, description, price, stock,quantity }
            const result = await this.services.createProduct(newProduct)
            
            res.send({
                status: 'Success',
                result: newProduct
            })
        } catch (error) {
            console.log(error);
        }
    }
    updateProduct = async (req, res) => {
        try {
            //ingresar descuento por params
            const { pid,desc } = req.params
            const promocion = { $mul: { price: desc } }
            const productUpdated = await this.services.updateProduct(pid, promocion)
            res.send({
                status: 'Success',
                promo: `${desc}% de descuento`,
                result: productUpdated
            })
        } catch (error) {
            console.log(error);
        }
    }
    deleteProduct = async (req, res) => {
        try {
            const { pid } = req.params
            const deleteProd = await this.services.deleteProduct(pid)
            res.send({
                status: 'Success, product delete'
            })
        } catch (error) {
            console.log(error);
        }


    }
}