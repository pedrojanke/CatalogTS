import { Body, Controller, Post } from "@nestjs/common";
import { createCatalogDto } from "src/dtos/createCatalogDto";

@Controller('catalog')
export class catalogController {
    constructor(private readonly catalogService: catalogController) { }

    @Post()
    create(@Body() createCatalogDto: createCatalogDto) {
        return this.catalogService.create(createCatalogDto);
    }
}