"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(post) {
    if (!post)
        return;
    let userGeneralPost = {
        idpost: post.idpost,
        content: post.content,
        iduser: post.iduser,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt
    };
    if (post.logado) {
        userGeneralPost.idpost = post.idpost;
        userGeneralPost.content = post.content(userGeneralPost).iduser = post.iduser;
        userGeneralPost.iduser = post.createdAt;
        userGeneralPost.iduser = post.updatedAt;
    }
    return userGeneralPost;
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMubW9kZWxzdG9lbnRpdGllcy5teXNxbC5EQi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9oZWxwZXJzL3Bvc3RzLm1vZGVsc3RvZW50aXRpZXMubXlzcWwuREIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxtQkFBeUIsSUFBUTtJQUM3QixJQUFHLENBQUMsSUFBSTtRQUNSLE9BQU07SUFFTixJQUFJLGVBQWUsR0FBZ0I7UUFDL0IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1FBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztRQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07UUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1FBQ3pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztLQUM1QixDQUFBO0lBRUQsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFDO1FBQ1YsZUFBK0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyRCxlQUErQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUN0RCxlQUE4QixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckQsZUFBK0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4RCxlQUErQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQzVEO0lBRUQsT0FBUSxlQUErQixDQUFDO0FBQzVDLENBQUM7QUFyQkQsNEJBcUJDIn0=