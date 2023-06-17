require('module-alias/register');

let{StatusCodes:SC} = require("http-status-codes");

let mock = require("@mock/alias");

module.exports = function handler(req, res){

    if(req.method === "GET"){
        res.status(SC.OK).json({
            data:mock
        });
    } else {
        res.status(SC.METHOD_NOT_ALLOWED).json({
            data: req.method
        });
    }
}