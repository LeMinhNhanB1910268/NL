const ApiError = require("../api-error");
const UserService = require("../services/user.service");
const MongoDB = require("../utils/mongodb.util");

exports.create = async (req, res, next) => {
    if (!req.body?.name) {
        return next(new AriError(400, "Name can not be empty"));
    }
    try {
        const userService = new UserService(MongoDB.client);
        const document = await userService.create(req.body);
        return res.send(document);
    } catch (error) {
        return next (
            new ApiError(500, "An error occurred while creating the contact")
        );
    }
};

exports.findAll = async (req, res, next) => {
    let document = [];
    try {
        const userService = new UserService(MongoDB.client);
        const { name } = req.query;
        if (name) {
            documents = await userService.findByName(name);
        } else {
            documents = await userService.find({});
        }
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while creating the contact")
        );
    }
    return res.send(documents);
};

exports.findOne = async (req, res, next) => {
    try {
        const userService = new UserService(MongoDB.client);
        const document = await userService.findById(req.params.id);
        if (!document) {
            return next (new ApiError (404, "Contact not found"));
        }
        return res.send(document);
    } catch (error) {
        return next (
            new ApiError(
                500,
                `Error retrieving contact with id=${req.params.id}`
            )
        );
    }
};
exports.findUsername = async (req, res, next) => {
    try {
        const userService = new UserService(MongoDB.client);
        const document = await userService.findByUsername(req.params.username);
        if (!document) {
            return next (new ApiError (404, "Contact not found"));
        }
        return res.send(document);
    } catch (error) {
        return next (
            new ApiError(
                500,
                `Error retrieving contact with id=${req.params.id}`
            )
        );
    }
};

exports.update = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return next(new ApiError(404, "Data to update can not be empty"));
    }
    try {
        const userService = new UserService(MongoDB.client);
        const document = await userService.update(req.params.id, req.body);
        if(!document) {
            return next(new ApiError(404, "Contact not found"));
        }
        return res.send({ message: "Contact was updated successfully" });
    } catch (error) {
        return next (
            new ApiError(500, `Error updating contact with id=${req.params.id}`)
        );
    }
};

exports.delete = async (req, res, next) => {
    try {
        const userService = new UserService(MongoDB.client);
        const document = await userService.delete(req.params.id);
        if (!document) {
            return next (new ApiError(404, "Contact not found"));
        }
        return res.send({ message: "Contact was deleted successfully" });
    } catch (error) {
        return next (
            new ApiError(
                500,
                `Could not delete contact with id=${req.params.id}`
            )
        );
    }
};

exports.findAllShopping = async (_req, res, next) => {
    try {
        const userService = new UserService(MongoDB.client);
        const document = await userService.findShopping();
        return res.send(documents);
    } catch (error) {
        return next (
            new ApiError(
                500,
                "An error occurred while while retrieving shopping contacts"
            )
        );
    }
};

exports.deleteAll = async (_req, res, next) => {
    try{
        const userService = new UserService(MongoDB.client);
        const deletedCount = await userService.deleteAll();
        return res.send({
            message: `${deletedCount} contacts were deleted successfully`,
        });
    } catch (error) {
        return next (
            new ApiError(500, "An error occurred while removing all contacts")
        );
    }
};




















// exports.create = (req, res) => {
//     res.send({message: "Create handler"});
// };
// exports.findAll = (req, res) => {
//     res.send({message: "findAll handler"});
// };
// exports.findOne = (req, res) => {
//     res.send({message: "findOne handler"});
// };
// exports.update = (req, res) => {
//     res.send({message: "update handler"});
// };
// exports.delete = (req, res) => {
//     res.send({message: "delete handler"});
// };
// exports.deleteAll = (req, res) => {
//     res.send({message: "deleteAll handler"});
// };
// exports.findAllFavorite = (req, res) => {
//     res.send({message: "findAllFavorite handler"});
// };