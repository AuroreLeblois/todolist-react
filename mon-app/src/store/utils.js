import axios from 'axios';

const API_URI = 'http://127.0.0.1:8000/api/todolist';

export const deleteTask = (id) =>{
axios.delete({API_URI}/{id} , {
  headers: {'Content-Type':'application/json'}
})
}
export default API_URI;
