import business from '../business/business.container';
const productEndpoint = (router) => {
    router.get('/api/product', async (request, response, next) => {
        try {
            let result = await business.getProductManager().query();
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });
    router.get('/api/product/:id', async (request, response, next) => {
        try {
            let result = await business.getProductManager().query();
            response.status(200).send(result.find(obj => obj.id === request.params.id));
        } catch (error) {
            console.log(error);
        }
    });

    router.post('/api/product', async (request, response, next) => {
        try {
            const result = await business.getProductManager(request).createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });
    router.put('/api/product/:id', async (request, response, next) => {
        try {
            const result = await business.getProductManager(request).createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });
    router.delete('/api/product/:id', async (request, response, next) => {
        try {
            let result = await business.getProductManager().remove(request.params.id);
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });
};
export default productEndpoint;
