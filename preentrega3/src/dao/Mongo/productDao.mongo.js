import productsModel from "../models/products.model.js";


class ProductDaoMongo {
    constructor() {
        this.model = productsModel
    }
    get = async () => await this.model.find({ isActive: true })

    getBy = async (filter) => await this.model.findOne({_id:filter})//PROBAR QUE TRAIGA LOS ACTIVOS

    create = async (newProduct) => await this.model.create(newProduct)

    update = async (pid, productUpdate) => await this.model.findByIdAndUpdate({ _id: pid }, productUpdate, { new: true })

    delete = async (pid) => await this.model.findByIdAndUpdate({ _id: pid }, { isActive: false })

}

export default ProductDaoMongo
