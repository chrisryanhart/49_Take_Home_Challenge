import axios from "axios";


const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


class YodlrApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { 'Authorization': `${YodlrApi.token}`};
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.log(err);
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  static async register(profileData){
    let res = await this.request('users',profileData,'post');
    return res;
  }

  static async getAllUsers(){
    let res = await this.request('users');
    return res;
  }

  static async deleteUser(id){
    let res = await this.request(`users/${id}`,{},'delete');
    return res;
  }

  static async approveUser(userDetails, id){
    let res = await this.request(`users/${id}`,userDetails,'put')
    return res;
  }

}




export default YodlrApi;