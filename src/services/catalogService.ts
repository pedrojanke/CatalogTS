import { createCatalogDto } from "src/dtos/createCatalogDto";
import { Catalog } from "src/entities/catalog.entity";
import { CatalogRepository } from "src/repositories/catalogRepository";
import { getCustomRepository } from "typeorm";

export class catalogService {
    private catalogRepository = getCustomRepository(CatalogRepository);

    // async createCatalog(createCatalogDto: createCatalogDto): Promise<Catalog> {
    //     const catalog = this.catalogRepository.create(createCatalogDto);
    //     return await this.catalogRepository.save(catalog);
    // }

    public createCatalog(dto: createCatalogDto): Catalog {
        try {
            Catalog newCatalog = this.catalogRepository.save(new Catalog(dto.categoryId(), dto.classificaitonId(), dto.specieId()));
        } catch (e) {
            throw new Error(e.message);
        }

    }

    public Species createSpecie(SpecieDTO dto){
        try{
            Species newSpecie = speciesRepository.save(new Species(null, dto.name()));
            return newSpecie;
        } catch (Exception e){
            throw new RuntimeException(e.getMessage());
        }
    }
}