import {ROLE} from '../../enums/role.enum.js';
// data to the Client
export class UserDto {
    id: number;
    email: string;
    name: string;
    role: ROLE;
}
