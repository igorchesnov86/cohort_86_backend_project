import { Injectable } from "@nestjs/common";
import {PoliciesRepository } from './policies.repository.js';
import {Policy} from './policies.entity.js';
import {CarsService} from '../cars/cars.service.js';
import {Car} from '../cars/cars.entity.js';

@Injectable()
class PoliciesService{
    constructor(
        private readonly repository: PoliciesRepository,
        private readonly carsService: CarsService
    ) {}
    async createPolicy(policy: Policy): Promise<Policy> {
    policy.active = true;
    return await this.repository.save(policy);
  }
  async getAllActivePolicies(): Promise<Policy[]> {
    return await this.repository.findAllActive();
  }
  async getActivePolicyById(id: number): Promise<Policy | null> {
    const policy: Policy | null = await this.repository.findById(id);
    if (!policy || !policy.active) {
      return null;
    }
    return policy;
  }

  async deleteById(id: number): Promise<void> {
    const policy: Policy | null = await this.repository.findById(id);
    if (policy) {
        policy.active = false;
        await this.repository.save(policy);
    } 
  }

  async restoreById(id: number): Promise<void> {
    const policy: Policy | null = await this.repository.findById(id);
    if (policy && !policy.active) {
        policy.active = true;
        await this.repository.save(policy);
    } 
  }
  async addActiveCarToActivePolicy(carId: number,policyId: number): Promise<void> {
    const policy: Policy | null= await this.getActivePolicyById(policyId);
    const car: Car | null = await this.carsService.getActiveCarById(carId);
    if (policy && car) {
        policy.cars.push(car);
        await this.repository.save(policy);
    }
  }
}
export {PoliciesService};
