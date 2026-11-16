// при исползовании ORM систем для взаимодействия с БД, тут будет располагаться 
//класс, ктр напрямую  отображается на таблицу в БД.
//Каждый экземпляр-объект представляет отдельную строку в БД.

import {ROLE} from '../users/enums/role.enum.js';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
//@Entity() kennzeichnet eine TypeScript-Klasse als Datenbank-Entity. TypeORM ordnet diese Klasse 
// einer Tabelle in der relationalen Datenbank zu. Die Eigenschaften der Klasse entsprechen dabei
// den Spalten der Tabelle
@Entity()
class User {
    //@PrimaryGeneratedColumn definiert eine automatisch generierte Spalte, die als 
    //Primärschlüssel dient
    @PrimaryGeneratedColumn({name: "id"})
    id: number;
    //@Column kennzeichnet eine Eigenschaft der Entity-Klasse als Spalte in der Datenbanktabelle.
    //Dieser Dekorator kann ein Objekt mit zusätzlichen Konfigurationsoptionen, z.B. nullable, type,
    //unique, entgegennehmen. Dieses Objekt bestimmt also die Eigenschaften und Einschränkungen einer
    //Datenbankspalte.
    @Column({name: "email",nullable: false,unique: true})
    email: string;
    @Column({name: "password",nullable:false, unique: false})
    password: string;
    @Column({name: "name",nullable:false, unique:false})
    name: string;
    @Column({name: "role", nullable: false, unique: false,type: "enum",enum: ROLE})
    role: ROLE;
    @Column({name: "active",nullable:false, unique: false})
    active: boolean;
}
export {User};