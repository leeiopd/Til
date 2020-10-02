# Django_Signals

1. `app`에 `signals.py`를 생성

   ```python
   from django.db.models.signals import post_save
   from django.dispatch import receiver
   from django.conf import settings
   
   from .models import Profile
   
   
   # 저장한 이후에 함수가 처리한다.
   @receiver(post_save, sender=settings.AUTH_USER_MODEL)       # post_save = save한 이후, sender = 유저
   def create_user_profile(instance, created, **kwards):       # created : boolean (생성과 수정을 구분)
       if created:
           Profile.objects.get_or_create(user=instance)        # 어떠한 상황에 어떤 인자들을 받는지 확인
                                                               # settings.AUTH_USER_MODEL 이거는 models.py랑 signals.py
                                                               # models폼에서 .save()를 하는 순간 신호발생해서 함수발생
           
   ```



2. `apps.py`

   ```python
   from django.apps import AppConfig
   
   class UsersConfig(AppConfig):
       name = 'users'
       def ready(self):
           from .signals import create_user_profile
   ```



# Django_Test

1. pip install django_test_plus

   ```
   git clone https://lab.ssafy.com/edutak/django_test.git
   ```


2. boards -> tests.py

   ```python
   from test_plus.test import TestCase
   from django.conf import settings
   
   class SettingsTest(TestCase):
       # 1. settings 값 확인
       def test_01_settings_locale(self):
           self.assertEqual(settings.USER_I18N, True)
   ```

3. `test.py`

```python
from test_plus.test import TestCase
from django.conf import settings


class SettingsTest(TestCase):
    # 1. settings 값 확인
    def test_01_settings_locale(self):
        self.assertEqual(settings.USE_I18N, True)       
        self.assertEqual(settings.TIME_ZONE, 'Asia/Seoul')
        
        
from .models import Board
from .forms import BoardForm
class BoardModelTest(TestCase):
    def test_01_model(self):
        board = Board.objects.create(   title='테스트', 
                                        content='내용', 
                                        user_id=1 )
        self.assertEqual(str(board), f'Board{board.pk}')
        
    def test_02_modelform_with_data(self):
        data = {'title': 'test', 'content': 'test'}
        self.assertEqual(BoardForm(data).is_valid(), True)
        
    def test_03_modelform_without_title(self):
        data = {'content': 'test' }
        self.assertEqual(BoardForm(data).is_valid(), False)
    
    def test_04_modelform_without_title(self):
        data = {'title': 'test' }
        self.assertEqual(BoardForm(data).is_valid(), False)
      
        
# BoardForm이 있는지 Test
class BoardViewCreateTest(TestCase):  # 필요한 걸 불러오는지, 저장이 되는지
    def setUp(self):
        # given
        user = self.make_user(username='test', password='xptmxmqht!')
        
    def test_01_get(self):
        # when
        # self.make_user(username='test', password='xptmxmqht!')   # 로그인, 로그인하지않은 상태면 302 에러코드 출력
        with self.login(username='test', password='xptmxmqht!'):
            response = self.get_check_200('boards:create')            
            # HTTP 상태코드 200 ok를 받을수 있냐 없냐!
            # self.assertEqual(response, '<form')                     
            # form 형식이 있는지
            # then
            self.assertIsInstance(response.context['form'], BoardForm)  
            # 302 : 로그인을 안한 상태를 말한다.
          	# key가 'form'인 딕셔너리의 value가 BoardForm인지!
                                        
    def test_02_login_required(self):
        self.assertLoginRequired('boards:create')
        
    def test_03_post_redirect_302(self):
        # given -> 사용자가 작성한 글이 request.POST로 넘어온다
        data = {'title': '제목 작성', 'content':'냉무'}
        
        # when -> 
        with self.login(username='test', password='xptmxmqht!'):
            self.post('boards:create', data=data)
            # then
            self.response_302()
            

class BoardViewDetailTest(TestCase):
    def setUp(self):
        self.user = self.make_user(username='test', password='xptmxmqht!')
        self.board = Board.objects.create(
                            title = '제목',
                            content = '내용',
                            user = self.user
                            )
    
    def test_01_get(self): 
        # when then
        self.get_check_200('boards:detail', board_pk = self.board.pk)
        
    def test_02_contain_board_title_content(self):
        # when
        self.get_check_200('boards:detail', board_pk = self.board.pk)
        # then
        self.assertResponseContains(self.board.title)
        self.assertResponseContains(self.board.content)
        
    def test_03_template(self):
        # when
        response = self.get_check_200('boards:detail', board_pk = self.board.pk)
        # then
        self.assertTemplateUsed(response, 'boards/detail.html')
    
    
class BoardViewIndexTest(TestCase):
    def setUp(self):
        # given
        self.user = self.make_user(username='test', password='xptmxmqht!')
        self.board = Board.objects.create(
                            title = '제목',
                            content = '내용',
                            user = self.user
                            )

    def test_01_boards_queryset(self):
        Board.objects.create(
                            title = '제목1',
                            content = '내용1',
                            user = self.user
                            )
        boards = Board.objects.order_by('-pk')
        response = self.get_check_200('boards:index')
        self.assertQuerysetEqual(response.context['boards'], map(repr, boards))
        
    def test_02_template(self):
        # when
        response = self.get_check_200('boards:index')
        # then
        self.assertTemplateUsed(response,'boards/index.html')
        
class BoardViewDeleteTest(TestCase):
    def setUp(self):
    # given
        self.user = self.make_user(username='test', password='xptmxmqht!')
        self.board = Board.objects.create(
                    title = '제목',
                    content = '내용',
                    user = self.user
                    )
    
    def test_01_get_405(self):
        # when
        with self.login(username='test', password="xptmxmqht!"):
            self.get('boards:delete', board_pk=self.board.pk)
            self.response_405()
        
    def test_02_post_302(self):
        # when
        with self.login(username='test', password="xptmxmqht!"):
            self.post('boards:delete', board_pk=self.board.pk)
            self.response_302()
        
    def test_03_delete(self):
        # when
        boards_count = Board.objects.count()
        with self.login(username='test', password="xptmxmqht!"):
            self.post('boards:delete', board_pk=self.board.pk)
            self.assertEqual(Board.objects.count(), boards_count-1)


class BoardViewUpdateTest(TestCase):
    def setUp(self):
    # given
        self.user = self.make_user(username='test', password='xptmxmqht!')
        self.board = Board.objects.create(
                                    title = '제목',
                                    content = '내용',
                                    user = self.user
                                    )
    
    def test_01_boardform_instance(self):
        with self.login(username='test', password='xptmxmqht!'):
            response = self.get_check_200('boards:update', board_pk=self.board.pk)
            self.assertEqual(response.context['form'].instance.pk, self.board.pk)
 
```

















# API_ Django_CRUD

```
C - POST
R - GET
U - PUT
D - DELETE
--------------------------------------------------------------
Example)
목록 - musics/	GET
C - musics/		 POST
R - musics/{music_pk}	GET
U - musics/{music_pk}	PUT
D - musics/{music_pk}	DELETE
```



pip install

```
djangorestframework
django-rest-swagger

'''
docstring
'''
```



