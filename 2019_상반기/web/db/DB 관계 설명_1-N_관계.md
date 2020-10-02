#  DB 생성

```python
user1 = User.objects.create(name='Kim')
user2 = User()
user2.name = 'Park'
user2.save()
post1 = Post.objects.create(title='1글', user=user1)
post2 = Post.objects.create(title='2글', user=user2)
post3 = Post.objects.create(title='3글', user=user1)
c1 = Comment.objects.create(content='1글1댓글', user=user1, post=post1)
c2 = Comment.objects.create(content='1글2댓글', user=user2, post=post1)
c3 = Comment.objects.create(content='1글3댓글', user=user1, post=post1)
c4 = Comment.objects.create(content='2글1댓글', user=user2, post=post2)
c5 = Comment.objects.create(content='3글1댓글', user=user1, post=post3)
c6 = Comment.objects.create(content='2글2댓글', user=user1, post=post2)
```



# 1. user1의 정보들

```python
user1 = User.objects.get(pk=1)
#=> <User: User object (1)>
user1.name
#=> 'Kim'
```



# 2. user1의 관계된 정보들
```python
user1.post_set.all()
#=> <QuerySet [<Post: Post object (1)>, <Post: Post object (3)>]>
user1.comment_set.all()
#=> <QuerySet [<Comment: Comment object (1)>, <Comment: Comment object (3)>, <Comment: Comment object (5)>, <Comment: Comment object (6)>]>
```


# 3. post1(n)의 유저(1) 정보
```python
post1 = Post.objects.get(pk=1) # Post 오브젝트
#=> <Post: Post object (1)>
post1.user  # User 오브젝트
#=> <User: User object (1)>
post1.user.name # User 오브젝트의 이름
#=> 'Kim'
```


# 4. user1이 작성한 모든 댓글의 내용을 출력하는 코드
```python
for comment in user1.comment_set.all():
    print(comment.content)

{% for comment in user1.comment_set.all %}
    {{ comment.content }}
{% endfor %}
```


# 5. 각각의 게시글마다 댓글을 출력
```python
posts = Post.objects.all()
# 쿼리셋, post의 오브젝트 모두 담겨있는
for post in posts:
    for comment in post.comment_set.all():
        print(comment.content)
# detail - 1
context = {'post': post}

{{ post.id }}번째 글
{% for comment in post.comment_set.all %}
    {{ comment.content }}
{% endfor %}

# detail -2 
context = {'post': post, 'comments': post.comment_set.all()}

{% for comment in comments %}
    {{ comment.content }}
{% endfor %}
```


# 6. 댓글의 id가 2인 것을 쓴 사람의 게시물들은?
```python
comment = Comment.objects.get(pk=2)
comment.user.post_set.all()
#=> <QuerySet [<Post: Post object (2)>]>
```


# 7. 1번 글의 댓글들 중 첫번째를 쓴 사람의 이름은?
```python
post = Post.objects.get(pk=1)
post.comment_set.first().user.name
post.comment_set.all()[0].user.name
# LIMIT 1
# post.image_set.first.file.url
```


# 8. 1번 글의 댓글 중 2,3,4번을 가지고 온다면?
```python
post = Post.objects.get(pk=1)
post.comment_set.all()[1:4] # OFFSET 1 LIMIT 3
```


# 9. 1번 글의 두번째 댓글을 쓴 사람의 첫번째 게시물의 작성자의 이름은?
```python
post = Post.objects.get(pk=1)
user_id = post.comment_set.all()[1].user.post_set.first.user.name
```


# 10. 오브젝트가 아닌 특정한 컬럼의 값을 가지고 오는 경우
```python
Comment.objects.values('user')
# => <QuerySet [{'user': 1}, {'user': 1}, {'user': 1}, {'user': 1}, {'user': 2}, {'user': 2}]>
# SELECT * FROM comment
# SELECT user FROM comment
```


# 11. 게시물을 pk값의 내림차순으로 가지고 온다면?
```python
Post.objects.order_by('-pk') # 내림차순 - 오름차순은 그냥
```


# 12. 1글 이라는 제목이 있는 게시글?
```python
Post.objects.filter(title='1글')
```


# 13. 제목에 1이 들어가있는 게시글
```python
# LIKE %%
Post.objects.filter(title__contains='1')
# Post.objects.filter(title__icontains='1')
```


# 14. 댓글들 중에서 해당하는 글의 제목에 1이 들어가는 경우
```python
Comment.objects.filter(post__title__contains='1')
```
