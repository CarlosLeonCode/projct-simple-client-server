import Http from "../utils/http";

class TaskController{
  static instance = new TaskController();

  async index(){
    const tasks = await Http.instance.get('/tasks');
    return tasks
  }

  async create(){

  }

  async update(){

  }

  async delete(){

  }
}

export default TaskController;
