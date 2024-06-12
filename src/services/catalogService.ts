import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { createCatalogDto } from "src/dtos/createCatalogDto";
import { Catalog } from "src/entities/catalog.entity";
import { CatalogRepository } from "src/repositories/catalogRepository";

@Injectable()
export class CatalogService {
    constructor(
        @InjectRepository(CatalogRepository)
        private catalogRepository: CatalogRepository
    ) {}

    async createCatalog(createCatalogDto: createCatalogDto): Promise<Catalog> {
        return await this.catalogRepository.save(createCatalogDto);
    }
    
}