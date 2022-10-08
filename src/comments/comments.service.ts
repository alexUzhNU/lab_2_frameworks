import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './comments.interface';

@Injectable()
export class CommentService {
    private comments: Comment[] = []
    private id: number = 0

    findById(id: number) {
        const index = this.comments.findIndex(p => p.id === id)
        if (index < 0) throw new NotFoundException("Not Found")
        return this.comments[index]
    }

    findAllByPostId(postId: number) {
        const allComments = this.comments.filter(c => c.postId === postId)
        return allComments
    }

    create(comment: CreateCommentDto) {
        const _comment: Comment = {
            id: this.id++,
            createdAt: new Date().toDateString(),
            ...comment
        }
        this.comments.push(_comment)
        return _comment
    }

    update(id: number, comment: UpdateCommentDto) {
        const index = this.comments.findIndex(p => p.id === id)

        if (index < 0) throw new NotFoundException("Not Found")
        const _comment: Comment = {
            ...this.comments[index],
            updatedAt: new Date().toDateString(),
            ...comment
        }
        this.comments[index] = _comment
        return _comment
    }
    
    delete(id: number) {
        this.comments = this.comments.filter(p => p.id !== id)
    }
}