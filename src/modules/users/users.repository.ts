//diese Datei ist für den Zugriff auf die Datenbank und die Verwaltung der Daten zuständig.
//  Ein Repository bildet die Scnittstelle zwischen der Anwendung und der Datenbank.
//TypeORM stell bereits Methoden zur Verfügung, mit denen Daten gespeichert, abgerufen, 
//aktualisiert und gelöscht werden können (CRUD): save(),find(),findOne(),
//update(), delete()
import {Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './users.entity.js';

//@Injectable указывает, что класс,указанный после него, является провайдером: этот декоратор разрешает
//NestJS автоматически создавать экземпляр этого класса и внедрять(передавать ) его
// в другие классы (например, сервисы в контроллеры) через constructor
@Injectable()
class UserRepository{
    constructor(
//@InjectRepository(User) signalisiert NestJS: "Ich benötige das Repository, das für die Entity User
// zuständig ist. Bitte stelle mir eine enrsprechende Instanz zur Verfügung."
        @InjectRepository(User)
//Repository ist eine generische Klasse von TypeORM. Der Ausdruck <User> gibt an, für welche Entity
//dieses Repository zuständig ist: Damit weiß TypeScript, welche Datenstruktur das jeweilige Repository
//verwaltet:
        private readonly repository: Repository<User>,
    ) {}
    //alle Users speichern
    async save(user: User): Promise<User> {
        return this.repository.save(user)
    }
    //alle users finden, die active sind:
    async findAllActive(): Promise<User[]> {
        return this.repository.findBy({active: true})
    }
    //
    async findById(id:number): Promise<User | null > {
        return this.repository.findOneBy({id})
    }

    async deleteById(id: number): Promise<void> {
        await this.repository.delete(id)
    }
}
export {UserRepository}
