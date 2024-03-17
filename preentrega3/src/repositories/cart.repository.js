

class CartRepository{
    constructor(cartDao){
        this.dao=cartDao
    }
    getCarts = async () => await this.dao.get()
    getCartBy = async (filter) => await this.dao.getBy(filter)
    createCart = async (newCart) => await this.dao.create(newCart)
    updateCart = async (cid,cartToUpdate) => await this.dao.update(cid,cartToUpdate)
    deleteCart = async (cid) => await this.dao.delete(cid)
}

export default CartRepository