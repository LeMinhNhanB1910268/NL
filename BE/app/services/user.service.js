const { ObjectId} = require("mongodb");

class UserService {
    constructor(client){
        this.User = client.db().collection("users");
    }
    extractUserData(payload) {
        const user = {
            name: payload.name,
            phone: payload.phone,
            email: payload.email,
            address: payload.address,
            tt: payload.tt,
            username: payload.username,
            password: payload.password,
        };
        Object.keys(user).forEach(
            (key) => user[key] ===  undefined && delete user[key]
        );
        return user;
    }
    async create(payload){
        const user = this.extractUserData(payload);
        const result = await this.User.findOneAndUpdate(
            user,
            { $set: {tt: user.tt === true } },
            { returnDocument: "after", upsert: true}
        );
        return result.value;
    }
    async find(filter) {
        const cursor = await this.User.find(filter);
        return await cursor.toArray();
    }
    async findByuserName(username) {
        return await this.find({
            username: { $regex: new RegExp(username), $options: "i"},
        });
    }   
    async findByPhone(phone) {
        return await this.find({
            phone: { $regex: new RegExp(phone), $options: "i"},
        });
    }  
    async findById(id) {
        return await this.User.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }
    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractUserData(payload);
        const result = await this.User.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );
        return result.value;
    }
    async delete(id) {
        const result = await this.User.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll() {
        const result = await this.User.deleteMany({});
        return result.deletedCount;
    } 
}

module.exports = UserService;
