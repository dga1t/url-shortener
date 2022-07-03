import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configValidationSchema } from './config.schema';
import { LinksModule } from './links/links.module';
import { WildcardModule } from './wildcard/wildcard.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      // ! #2 change to env variable instead of config file
      envFilePath: [`stage.${process.env.STAGE}.env`],
      validationSchema: configValidationSchema,
    }),
    // ! #4 use useClass instead of useFactory??
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          autoLoadEntities: true,
          // ! #5 Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
          synchronize: true,
          seeds: ['src/db/*{.ts,.js}'],
          factories: ['src/db/*{.ts,.js}'],
        };
      },
    }),
    LinksModule,
    WildcardModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
