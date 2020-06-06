"use strict";
import { Query } from './Query';
// import axios from 'axios';
import { User } from './models/schema';
const fetch = require('node-fetch');


export default class Hashnode {

  config: any;
  user: User | undefined;

  constructor(apiKey: String){
    this.config = {
      url: 'https://api.hashnode.com/',
      headers: {
        // 'Accept-Encoding': 'gzip, deflate, br',
        'Content-Type': 'application/json',
        // 'Accept': 'application/json',
        // 'Connection': 'keep-alive',
        // 'DNT': '1',
        // 'Origin': 'https://api.hashnode.com',
        'Authorization': apiKey,
      },
      method: 'post'
    };
  }

  fetchUserDetails(username: String){
    const config = this.config && this.config;
    fetch(config.url, {
      method: 'POST',
      headers: config.headers,
      body: JSON.stringify({
        query: Query.fetchUserDetails(username)
      }),
    })
    .then((res: { json: () => any; }) => res.json())
    .then((res: any) => console.log(JSON.stringify(res)))
    .catch((error: any) => console.log(error));
    // axios({
    //   url : config.url,
    //   headers: config.headers,
    //   body: JSON.stringify({
    //     query: Query.fetchUserDetails(username);
    //   }),
    // }).then( (res) => {
    //   this.user = { ...res.data };
    //   console.log(res.data);
    // }).catch( (error) => {
    //   console.log(error);
    // })
  }
}