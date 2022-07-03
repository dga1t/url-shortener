import { Factory, Seeder } from "typeorm-seeding";
import { getManager } from "typeorm";
import { Link } from "../../links/link.entity";

export default class CreateLinks implements Seeder {
    public async run(factory: Factory): Promise<void> {
        await factory(Link)().createMany(100);
    }
}