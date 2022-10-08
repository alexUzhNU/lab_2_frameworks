export class UpdateCommentDto {
    constructor(readonly postId: number, readonly text: string) {
    }
}