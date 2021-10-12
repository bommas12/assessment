import { v4 as uuidv4 } from 'uuid';
export default class Utils{
    static generateId(){
        return uuidv4();
    }
    static store(jsonData){
        localStorage.setItem('todo-list',JSON.stringify(jsonData));
    }
    static retrieve(){
        return JSON.parse(localStorage.getItem('todo-list'));
    }
}