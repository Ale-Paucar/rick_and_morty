const axios = require("axios")
const {KEY,URL} = process.env;
// const URL = "https://be-a-rym.up.railway.app/api";
// const KEY = "d66ed9e3539f.e190f2682879ad1a64d3";

const succesH = (response,res) =>{
    
    const {id, image, name, gender, species} = response.data;
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({id, image, name, gender, species}));
}

const errorH = (error,res) => {
    console.log(error.config.url)
    res.writeHead(500,  { "Content-Type": "text/plain" });
    res.end(error.message);
}

const getCharById = (res, id) => {
    axios
    .get(`${URL}/character/${id}?key=${KEY}`)
    .then(response => succesH(response,res))
    .catch(error => errorH(error,res))
}; 

module.exports = getCharById;