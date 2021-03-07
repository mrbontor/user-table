module.exports = function(app) {
    const ctrl = require('../controllers');

    app.route('/')
        .get(ctrl.getHome)

    app.route('/api/user/trx/list')
        .get(ctrl.getUserTrxList)

        app.route('/api/user/trx/group')
            .get(ctrl.getUserTrxGroup)


    app.get('/api/ping', function (req, res) {
        res.status(200).json({status: true, message: "How are you? i`m Fine. Thanks "})
    })
};
