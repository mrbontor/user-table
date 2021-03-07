const iniParser = require('./libs/iniParser')
const args = require('minimist')(process.argv.slice(2));
const bodyParser = require('body-parser')
const express = require('express')
const env = process.env.NODE_ENV || 'development'
const logging = require('./libs/logging')
const app = express()

process.env.TZ = 'Asia/Jakarta'
// default config if config file is not provided

let config = {
    log: {
        path: 'var/log/',
        level: 'debug',
        type: 'both',
        errorSufix: '-error',
        filename: 'log-users-table'
    }
}

if (args.h || args.help) {
    // TODO: print USAGE
    console.log("Usage: node " + __filename + " --config");
    process.exit(-1);
}

// overwrite default config with config file
let configFile = {}
if (env === 'development') {
    configFile = args.c || args.config || './config.users.table.dev.ini'
} else {
    configFile = args.c || args.config || './config.users.table.prod.ini'
}
config = iniParser.init(config, configFile, args)
config.log.level = args.logLevel || config.log.level

const take_port = config.app.port;
const port = take_port || process.env.PORT || 2021;

// Initialize logging library
logging.init(config.log)

logging.info(`[CONFIG] ${JSON.stringify(iniParser.get())}`)

app.use(express.static('resources'));
app.set('etag', false)

app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store')
    next()
})

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(err, req, res, next) {
    logging.info(`[REQ] ${JSON.stringify(req)}`)
    logging.info(`[RES] ${JSON.stringify(res)}`)
    if (err) {
        logging.error('[MIDDLEWAREERROR] ' + JSON.stringify(err));
        res.status(500);
        let response = {
            status: 500,
            errors: [err.message]
        };
        res.json(response);
    } else {
        next();
    }
});


const routes = require('./router/router');
routes(app);

const server = app.listen(port);
logging.info('[app] API-SERVICE USERS-TABLE STARTED on ' + port);
module.exports = server;
