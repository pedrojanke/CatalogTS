import { Catalog } from "src/entities/catalog.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Catalog)
export class CatalogRepository extends Repository<Catalog> {

}