import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GetLinkDto } from './dto/get-link.dto';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { LinksService } from './links.service';
import { Link } from './link.entity';

import faker from '@faker-js/faker';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}
  
  @Get()
  getAllLinks(): Promise<Link[]> {
    return this.linksService.getAllLinks();
  }
  
  @Post()
  createLink(@Body() createLinkDto: CreateLinkDto): Promise<Link> {
    if (!createLinkDto.name) createLinkDto.name = faker.random.alpha(8);    
    return this.linksService.createLink(createLinkDto);
  }

  @Delete('/:id')
  deleteLink(@Param() getLinkDto: GetLinkDto): Promise<void> {
    return this.linksService.deleteLink(getLinkDto);
  }

  @Put('/:id')
  updateLink(
    @Param() getLinkDto: GetLinkDto,
    @Body() updateLinkDto: UpdateLinkDto,
  ): Promise<Link> {
    return this.linksService.updateLink(getLinkDto, updateLinkDto);
  }
}
