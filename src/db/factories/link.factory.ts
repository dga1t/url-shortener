import faker from '@faker-js/faker';
import { define } from 'typeorm-seeding';
import { Link } from '../../links/link.entity';

define(Link, () => {
    const link = new Link();

    link.id = faker.datatype.uuid();
    link.name = faker.random.alpha(8);
    link.url = faker.internet.url();
    
    return link;
})