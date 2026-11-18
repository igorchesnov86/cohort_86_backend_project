import { Injectable } from '@nestjs/common';
import { UserUpdateDto } from './requests/users.update-dto.js';
import { UserSaveDto } from './requests/users.save-dto.js';
import { UserDto } from './responses/users.dto.js';
import { User } from '../users.entity.js';
@Injectable()
export class UsersMapper {
  // Клиент будет делать запрос на создание пользователся с таким обьектом entity
  mapDtoToEntity(userSaveDto: UserSaveDto): User {
    const entity: User = new User();
    entity.email = userSaveDto.email;
    entity.password = userSaveDto.password;
    entity.name = userSaveDto.name;
    return entity;
  }
  // Сервер будет отвечать на клиент с таким dto обьектом
  mapEntityToDto(entity: User): UserDto {
    if (!entity) {
      return new UserDto();
    }
    const dto: UserDto = new UserDto();
    dto.id = entity.id;
    dto.name = entity.name;
    dto.email = entity.email;
    dto.role = entity.role;
    return dto;
  }
  mapEntityListToDtoList(entityList: User[]): UserDto[] {
    return entityList.map((userObj: User) => this.mapEntityToDto(userObj));
  }
}