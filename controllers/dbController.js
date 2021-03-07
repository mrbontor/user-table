const logging = require('../libs/logging')
const Sequelize = require('sequelize');
// const Op = Sequelize.Op;
const models = require('../models/fd-db/')

function getUsersTrx() {
    return new Promise(function (resolve, reject) {
        models.UserTrx
        .findAll({
            attributes: [
                ['id', 'ID'], [Sequelize.fn('concat', Sequelize.col('firstname'), ' ',Sequelize.col('lastname')), 'Fullname'],
                ['email', 'Email'], ['item', 'Item'], ['quantity', 'Quantity'], ['total_price', 'TotalPrice']
            ],
            // order: [['item', 'DESC']],
        })
        .then(function (data) {
            logging.info(`[getUsersTrx] >>>> ${JSON.stringify(data)}`)

            resolve(data)
        })
        .catch(function (err) {
            logging.error(`[getUsersTrx Err] >>>> ${JSON.stringify(err.stack)}`)
            if (err) reject(false)
        })
    })
}

function findUserTrxByGroup() {
    return new Promise(async function (resolve, reject) {
        let items = await getItems()
        let attributes = [
            [Sequelize.fn('concat', Sequelize.col('firstname'), ' ',Sequelize.col('lastname')), 'Fullname'],
            ['email', 'Email']
        ]

        items.forEach((el, i) => {
            let x =
            [Sequelize.fn('SUM', Sequelize.literal('CASE WHEN `item` ="'+ el.item + '" THEN `quantity` ELSE 0 END')), `${el.item}`]

            attributes.push(x)
        });

        let type_ = getItemsValue(items)

        models.UserTrx
        .findAll({
            attributes: attributes,
            where: {
                item: type_,
            },
            group: ['email'],
            order: [['item', 'ASC']],
            raw: true,
        })
        .then(function (data) {
            logging.debug(`[findUserTrxByGroup] >>>> ${JSON.stringify(data)}`)

            resolve(data)
        })
        .catch(function (err) {
            logging.error(`[findUserTrxByGroup Err] >>>> ${JSON.stringify(err.stack)}`)
            if (err) reject(false)
        })
    })
}

function getItemsValue(arr) {
    return arr.map(el =>{
        return el.item;
    })
}

function getItems() {
    return new Promise(function (resolve, reject) {
        models.UserTrx
        .findAll({
            attributes: ['item'],
            group: ['item'],
            order: [['item', 'ASC']]
        })
        .then(function (data) {
            logging.debug(`[getItems] >>>> ${JSON.stringify(data)}`)

            resolve(data)
        })
        .catch(function (err) {
            logging.error(`[getItems Err] >>>> ${JSON.stringify(err.stack)}`)
            if (err) reject(false)
        })
    })
}


module.exports = {
    getUsersTrx,
    findUserTrxByGroup,
};
