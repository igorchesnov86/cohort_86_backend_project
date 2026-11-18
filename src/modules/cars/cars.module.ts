import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {Car } from './cars.entity.js';
import { CarsRepository } from './cars.repository.js';
import { CarsService } from './cars.service.js';
import { UsersService } from '../users/users.service.js';
import {UserModule} from '../users/users.module.js';



@Module({
    imports: [TypeOrmModule.forFeature([Car]),UserModule],
    providers: [CarsService,CarsRepository],
    exports: [CarsService],
})
class CarsModule {}

export {CarsModule};
