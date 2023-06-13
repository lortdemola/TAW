import ProductDAO from "../DAO/productDAO";

function create(context) {
    async function query() {
        let result = ProductDAO.query();
        if (result) {
            return result;
        }
    }

    async function get(id) {
        let result = await ProductDAO.get(id);
        if (result) {
            return result;
        }
    }

    async function createNewOrUpdate(data) {
        let result = await ProductDAO.createNewOrUpdate(data);
        if (result) {
            return result;
        }
    }
    async function remove(id) {
        let result = await ProductDAO.remove(id);
        if (result) {
            return result;
        }
    }
    return {
        query: query,
        get: get,
        createNewOrUpdate: createNewOrUpdate,
        remove:remove,
    };
}

export default {
    create: create
};
