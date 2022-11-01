const { ObjectId} = require("mongodb");
// const { deleteAll } = require("../controllers/contact.controller");

class ProductService {
    constructor(client){
        this.Product = client.db().collection("products");
    }
    extractProductData(payload) {
        const product = {
            name: payload.name,
            type: payload.type,
            clb: payload.clb,
            size: payload.size,
            number: payload.number,
            namepl: payload.namepl,
            shopping: payload.shopping,
            image: payload.image,
        };
        Object.keys(product).forEach(
            (key) => product[key] ===  undefined && delete product[key]
        );
        return product;
    }
    async create(payload){
        const product = this.extractProductData(payload);
        const result = await this.Product.findOneAndUpdate(
            product,
            { $set: {shopping: product.shopping === true } },
            { returnDocument: "after", upsert: true}
        );
        return result.value;
        // return result.status(200).json(req.body);
    }
    async find(filter) {
        const cursor = await this.Product.find(filter);
        return await cursor.toArray();
    }
    async findByName(name) {
        return await this.find({
            name: { $regex: new RegExp(name), $options: "i"},
        });
    }   
    async findByCLB(clb) {
        return await this.find({
            name: { $regex: new RegExp(clb), $options: "i"},
        });
    }  
    async findById(id) {
        return await this.Product.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }
    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractProductData(payload);
        const result = await this.Product.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );
        return result.value;
    }
    async delete(id) {
        const result = await this.Product.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async findShopping(){
        return await this.find({ shopping: true });
    }
    async deleteAll() {
        const result = await this.Product.deleteMany({});
        return result.deletedCount;
    } 
}

module.exports = ProductService;