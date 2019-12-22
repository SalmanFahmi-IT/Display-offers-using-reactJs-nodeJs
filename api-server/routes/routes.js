const offerRoutes = require('./offers');
const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('Welcome to development api-server');
    });

    offerRoutes(app, fs);
};

module.exports = appRouter;