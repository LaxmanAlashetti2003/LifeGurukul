import { type User, type InsertUser, type ConsultationRequest, type InsertConsultationRequest } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createConsultationRequest(request: InsertConsultationRequest): Promise<ConsultationRequest>;
  getAllConsultationRequests(): Promise<ConsultationRequest[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private consultationRequests: Map<string, ConsultationRequest>;

  constructor() {
    this.users = new Map();
    this.consultationRequests = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createConsultationRequest(insertRequest: InsertConsultationRequest): Promise<ConsultationRequest> {
    const id = randomUUID();
    const request: ConsultationRequest = {
      ...insertRequest,
      id,
      createdAt: new Date(),
    };
    this.consultationRequests.set(id, request);
    return request;
  }

  async getAllConsultationRequests(): Promise<ConsultationRequest[]> {
    return Array.from(this.consultationRequests.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
