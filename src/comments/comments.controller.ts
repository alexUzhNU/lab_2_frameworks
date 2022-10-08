import { Controller, Get, Param, Post, Put, Delete, Body, ParseIntPipe, HttpCode, HttpStatus, Query, Header, Redirect } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentService } from './comments.service';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentService) {
    }

    @Get()
    @Header('Cache-Control', 'none')
    findAll(@Query('postId', new ParseIntPipe()) postId: number,) {
        return this.commentsService.findAllByPostId(postId)
    }

    @Get(":id")
    getById(@Param('id', new ParseIntPipe()) id: number) {
        return this.commentsService.findById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() body: CreateCommentDto) {
        return this.commentsService.create(body)
    }

    @Put(":id")
    @HttpCode(HttpStatus.ACCEPTED)
    update(@Param('id', new ParseIntPipe()) id: number, @Body() body: UpdateCommentDto) {
        return this.commentsService.update(id, body)
    }

    @Delete(":id")
    delete(@Param('id', new ParseIntPipe()) id: number) {
        return this.commentsService.delete(id)
    }
}