import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions } from 'typeorm';
import { GetLinkDto } from './dto/get-link.dto';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { LinksRepository } from './links.repository';
import { Link } from './link.entity';

@Injectable()
export class LinksService {
  constructor(
    @InjectRepository(LinksRepository)
    private readonly linksRepository: LinksRepository,
  ) {}

  async getAllLinks(): Promise<Array<Link>> {
    // ! #14 - find(conditions?: FindConditions<Entity>) - use one method instead of two - getAllLinks and getLink ??
    return this.linksRepository.find({});
  }

  async createLink(createLinkDto: CreateLinkDto): Promise<Link> {
    return this.linksRepository.createLink(createLinkDto);
  }

  // ! #15 - signature ???
  async getLink(conditions: FindConditions<Link>): Promise<Link> {
    const link = await this.linksRepository.findOne(conditions);

    if (!link) throw new NotFoundException();

    return link;
  }

  async deleteLink(getLinkDto: GetLinkDto): Promise<void> {
    const { id } = getLinkDto;
    const res = await this.linksRepository.delete({ id });

    // ! #16 - use remove instead of delete method ??
    if (res.affected === 0) {
      throw new NotFoundException(`Link with ID: "${id}" not found`);
    }
  }

  async updateLink(
    getLinkDto: GetLinkDto,
    updateLinkDto: UpdateLinkDto,
  ): Promise<Link> {
    const { id } = getLinkDto;
    const link = await this.getLink({ id });
    const { name, url } = updateLinkDto;

    link.name = name;
    link.url = url;

    await this.linksRepository.save(link);

    return link;
  }
}
