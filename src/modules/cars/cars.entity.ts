import {Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { User} from '../users/users.entity.js';

@Entity()
class Car {
    @PrimaryGeneratedColumn({name: "id"})
    id: number;
    @Column({name: "brand",nullable: false, unique: false})
    brand: string;
    @Column({name: "model",nullable: false, unique: false})
    model: string;
    @Column({name: "year",nullable: false, unique: false})
    year: number;
    @Column({name: "vin",nullable: false, unique: true})
    vin: string;
    @Column({name: "color",nullable: false, unique: false})
    color: string;
//TypeORM erstellt aufgrund der Many-to-One-Beziehung automatisch eine Fremdschlüsselspalte 
// in der Datenbank, beispielsweise ownerId.
// Du musst diese nicht zwingend als separate Property in deiner Entity definieren.
    @ManyToOne((): typeof User => User, {nullable: false})
    owner: User;
    @Column({name: "active",nullable: false, unique: false})
    active: boolean;
}
export {Car};

