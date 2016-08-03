import axios from 'axios';
import store from 'store';
var crypto = require('crypto');

const API_PUBLIC = '298bab46381a6daaaee19aa5c8cafea5';
const API_PRIVATE = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';

export function getHeroes() {
	let timestamp = new Date().getTime() / 1000;
    return axios.get('http://gateway.marvel.com:80/v1/public/characters?ts=' 
    	+ timestamp 
    	+ '&apikey=' + API_PUBLIC 
    	+ '&hash=' + crypto.createHash('md5').update(timestamp + API_PRIVATE + API_PUBLIC)
    	.digest('hex')).then(function(response) {
            console.log(response.data.data.results);
    		store.dispatch({
    			type:'GET_HEROES',
    			heroes:response.data.data.results
    		})

    	}).catch(function(err) {
    		console.error(err);
    	});
}

export function getHero(id) {
    let timestamp = new Date().getTime() / 1000;
        return axios.get('http://gateway.marvel.com:80/v1/public/characters/' + id + '?ts=' 
            + timestamp 
            + '&apikey=' + API_PUBLIC 
            + '&hash=' + crypto.createHash('md5').update(timestamp + API_PRIVATE + API_PUBLIC)
            .digest('hex')).then(function(response) {
                console.log(response.data.data.results);
                store.dispatch({
                    type:'GET_HERO',
                    hero:response.data.data.results
                })
        }).catch(function(err) {
            console.error(err);
        });
}