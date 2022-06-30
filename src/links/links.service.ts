import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LinksRepository } from './links.repository';
import { Link } from './link.entity';
import { CreateLinkDto } from './dto/create-link.dto';
import { FindConditions } from 'typeorm';

@Injectable()
export class LinksService {
  constructor(
    @InjectRepository(LinksRepository)
    private readonly linksRepository: LinksRepository,
  ) {}

  async getAllLinks(): Promise<Array<Link>> {
    return this.linksRepository.find({});
  }

  async createLink(createLinkDto: CreateLinkDto): Promise<Link> {
    return this.linksRepository.createLink(createLinkDto);
  }

  async getLink(conditions: FindConditions<Link>): Promise<Link> {
    return this.linksRepository.findOne(conditions);
  }
}
