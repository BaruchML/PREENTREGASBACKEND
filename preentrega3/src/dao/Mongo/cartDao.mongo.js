import cartsModel from "../models/carts.model.js";

class CartDaoMongo {
    constructor() {
        this.model = cartsModel
    }

    get = async () => await this.model.find({ isActive: true })

    getBy = async (filter) => await this.model.findOne(filter)// ?? asi funcionara?

    create = async (newCart) => await this.model.create(newCart)// ?? asi funcionara?

    update = async (cid, newCart) => await this.model.findOneAndUpdate({ _id: cid }, newCart, { new: true })

    delete = async (cid) => await this.model.findOneAndUpdate({ _id: cid }, { isActive: false })

}

export default CartDaoMongo