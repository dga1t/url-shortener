import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { LinksService } from './links.service';
import { Link } from './link.entity';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Get()
  getAllLinks() {
    return this.linksService.getAllLinks();
  }

  @Post()
  createLink(@Body() createLinkDto: CreateLinkDto): Promise<Link> {
    return this.linksService.createLink(createLinkDto);
  }
}
