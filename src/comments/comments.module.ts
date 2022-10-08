import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentService } from './comments.service';

@Module({
    controllers: [CommentsController],
    providers: [CommentService],
})
export class CommentModule { }