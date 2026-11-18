import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {PoliciesRepository} from './policies.repository.js';
import {PoliciesService} from './policies.service.js';
import {CarsModule} from '../cars/cars.module.js';

import { Policy } from './policies.entity.js';

@Module({
//TypeOrmModule.forFeature([Policy]) registriert das Repository für die Entity Policy innerhalb 
//des Moduls. Erst dadurch kann NestJS das entsprechende Repository über @InjectRepository(Policy)
//bereitstellen:
    imports: [TypeOrmModule.forFeature([Policy]), CarsModule],
    providers: [PoliciesRepository, PoliciesService]
})
class PoliciesModule {}

export {PoliciesModule};