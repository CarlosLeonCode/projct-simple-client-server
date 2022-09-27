import config from "./config";

export default class Http{
  static instance = new Http();

  constructor(){
    this.basePath = config.apiBasePath;
  }

  async get(endpoint){
    const payload = await fetch(`${this.basePath}${endpoint}`);
    const result = await payload.json();
    return result;
  }

  async post(){

  }

  async patch(){

  }
}
