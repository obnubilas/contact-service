// Servicio FAKE SOCIAL

//constantes
const axios = require('axios')
const urlJoin = require('url-join');
const debug = require('debug')('contacts-service:fake-social');

const FAKE_SOCIAL_SERVICE = process.env.FAKE_SOCIAL_SERVICE ||  'http://localhost:3333';
const API_VERSION = "/api/v1";

//metodo asincrono donde esperamos entre otras cosas las respuesta
const getSocial = async function(name){
      try{
        const url = urlJoin(FAKE_SOCIAL_SERVICE, API_VERSION, '/Social/', name);
        const response = await axios.get(url); //lo que nos devuelva la respuesta, ponemos await al ser asincrono
        debug(response);
        return responde.data;
    }catch (error){
        console.error(error);
        return null;
    };
} 

module.exports = {
    "getSocial": this.getSocial
}