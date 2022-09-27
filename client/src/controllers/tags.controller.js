import Http from "../utils/http";

class TagController{
  static instance = new TagController();

  async index(){
    const tags = await Http.instance.get('/tags');
    return tags;
  }

  async create(){

  }

  async update(){

  }

  async delete(){

  }
}

export default TagController;
