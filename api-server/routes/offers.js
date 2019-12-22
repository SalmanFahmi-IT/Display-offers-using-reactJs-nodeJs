const offerRoutes = (app, fs) => {
    const offersPath = './data/offers.json';
    const userOffersPath = './data/useroffers.json';

    app.get('/offers', (req, res) => {
        fs.readFile(offersPath, 'utf8',(err, data) => {
            if(err) throw err;
            res.send(JSON.parse(data));
        });
    });

    app.get('/useroffers', (req, res) => {
        fs.readFile(userOffersPath, 'utf8',(err, data) => {
            if(err) throw err;
            res.send(JSON.parse(data));
        });
    });

    app.post('/useroffers', (req, res) => {
        fs.readFile(userOffersPath, 'utf8',(err, data) => {
            if(err) throw err;
            const result = JSON.parse(data);
            result.push(req.body);
            fs.writeFile(userOffersPath, JSON.stringify(result), 'utf8', (err) =>{
                if(err) throw err;
                res.status(200).send('new offer applied!')
            });
        });
    });
};
module.exports = offerRoutes;