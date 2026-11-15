// при исползовании ORM систем для взаимодействия с БД, тут будет располагаться 
//класс, ктр будет напрямую 
import {ROLE} from '../users/enums/role.enum.js';

class User {
    id: number;
    email: string;
    password: string;
    name: string;
    role: ROLE;
    active: boolean;
}
export {User};