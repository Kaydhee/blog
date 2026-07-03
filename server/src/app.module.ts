import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { PrismaModule } from './prisma/prisma.module';
// import { AuthModule } from './auth/auth.module';
// import { UsersModule } from './users/users.module';
// import { PostsModule } from './posts/posts.module';
// import { CommentsModule } from './comments/comments.module';
// import { CategoriesModule } from './categories/categories.module';
// import { BookmarksModule } from './bookmarks/bookmarks.module';
// import { LikesModule } from './likes/likes.module';
// import { UploadsModule } from './uploads/uploads.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // PrismaModule,
    // AuthModule,
    // UsersModule,
    // PostsModule,
    // CommentsModule,
    // CategoriesModule,
    // BookmarksModule,
    // LikesModule,
    // UploadsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
