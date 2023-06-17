require('module-alias/register');

//libs
let{StatusCodes:SC} = require("http-status-codes");
let axios = require("axios");

//files
let mock = require("@mock/alias");

module.exports = async function handler(req, res){

    if(req.method === "GET"){
        try{
            let url = "https://jsonplaceholder.typicode.com/users";
            let {data} = await axios.get(url);

            res.status(SC.OK).json({data});

        }catch(err){
            res.status(SC.NOT_FOUND).json({data:SC.NOT_FOUND});
        }

    } else {
        res.status(SC.METHOD_NOT_ALLOWED).json({
            data: req.method
        });
    }
}