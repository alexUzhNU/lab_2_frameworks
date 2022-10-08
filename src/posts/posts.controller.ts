import { Controller, Get, Param, Post, Put, Delete, Body, ParseIntPipe, HttpCode, HttpStatus, Query, Header, Redirect } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostService) {
    }

    @Get()
    @Header('Cache-Control', 'none')
    findAll(@Query('page', new ParseIntPipe()) page: number, @Query('size', new ParseIntPipe()) size: number) {
        return this.postsService.findAll(page, size)
    }

    @Get(":id")
    getById(@Param('id', new ParseIntPipe()) id: number) {
        return this.postsService.findById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() body: CreatePostDto) {
        return this.postsService.create(body)
    }

    @Put(":id")
    @HttpCode(HttpStatus.ACCEPTED)
    update(@Param('id', new ParseIntPipe()) id: number, @Body() body: UpdatePostDto) {
        return this.postsService.update(id, body)
    }

    @Delete(":id")
    delete(@Param('id', new ParseIntPipe()) id: number) {
        return this.postsService.delete(id)
    }
}