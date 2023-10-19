import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserCar } from './entities/user_car.entity';
import { CarBrand } from './entities/car_brand.entity';
import { CarModel } from './entities/car_model.entity';
import { UserCarModule } from './user-car/user-car.module';
import { CarPackage } from './entities/car_package.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UserPost } from './entities/user_post.entity';
import { PostComment } from './entities/post_comment.entity';
import { PostLike } from './entities/post_like.entity';
import { PostLikeModule } from './post-like/post-like.module';
import { UserPostModule } from './user-post/user-post.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'local.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: 'postgres',
        password: 'Turab_46',
        database: configService.get<string>('DATABASE_NAME'),
        logging: configService.get<boolean>('DATABASE_LOGGING'),
        synchronize: configService.get<boolean>('DATABASE_SYNC'),
        entities: [
          User,
          UserCar,
          CarBrand,
          CarModel,
          CarPackage,
          UserPost,
          PostComment,
          PostLike,
        ],
      }),
      inject: [ConfigService],
    }),
    UserCarModule,
    AuthModule,
    UsersModule,
    AuthModule,
    UserPostModule,
    PostLikeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
