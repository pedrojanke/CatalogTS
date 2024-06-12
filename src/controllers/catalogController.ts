import { Body, Controller, Post } from "@nestjs/common";
import { createCatalogDto } from "src/dtos/createCatalogDto";
import { Catalog } from "src/entities/catalog.entity";

@Controller('catalogs')
export class catalogController {
    constructor(private catalogService: catalogController) { }

    @Post()
    async createCatalog(@Body() createCatalogDto: createCatalogDto): Promise<Catalog> {
        return await this.catalogService.createCatalog(createCatalogDto);
    }
}