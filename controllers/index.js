const iniParser = require('../libs/iniParser')
const logging = require('../libs/logging')

const db = require('./dbController');
const path = require('path');
let config = iniParser.get()

const SUCCESS           = 200
const BAD_REQUEST       = 400
const NOT_FOUND         = 404
const INTERNAL_ERROR    = 500

async function getUserTrxList(req, res) {
    let result = {status:false, message: "No data found"}
    try {
        let list = await db.getUsersTrx()
        logging.debug(`[ListUserTrx] >>> ${JSON.stringify(list)}`)

        if (!list || list.length === 0) {
            return res.status(NOT_FOUND).send(result)
        }

        result.status = true
        result.message = "Success"
        result.data = list
        res.status(SUCCESS).send(result);
    } catch (e) {
        logging.error(`[ListUserTrx] >>> ${JSON.stringify(e.stack)}`)
        result.message = "something went wrong"
        res.status(INTERNAL_ERROR).send(result)
    }
}

async function getUserTrxGroup(req, res) {
    let result = {status:false, message: "No data found"}
    try {
        let list = await db.findUserTrxByGroup()
        logging.debug(`[ListUserTrx] >>> ${JSON.stringify(list)}`)

        if (!list || list.length === 0) {
            return res.status(NOT_FOUND).send(result)
        }

        result.status = true
        result.message = "Success"
        result.data = list
        res.status(SUCCESS).send(result);
    } catch (e) {
        logging.error(`[ListUserTrx] >>> ${JSON.stringify(e.stack)}`)
        result.message = "something went wrong"
        res.status(INTERNAL_ERROR).send(result)
    }
}

function getHome(req, res) {
    res.sendFile(path.resolve(__dirname+"../../views/index.html"));
}

module.exports = {
    getUserTrxList,
    getUserTrxGroup,
    getHome
};
