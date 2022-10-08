import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './posts/post.module';
import { PostService } from './posts/post.service';
import { PostsController } from './posts/posts.controller';
import { CommentModule } from './comments/comments.module';
import { CommentService } from './comments/comments.service';
import { CommentsController } from './comments/comments.controller';

@Module({
  imports: [PostModule, CommentModule],
  controllers: [AppController, PostsController, CommentsController],
  providers: [AppService, PostService, CommentService],
})
export class AppModule {}
