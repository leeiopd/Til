# AI와 머신러닝-rain

## 들어가기 전, 용어정리

+ 머신러닝: 인공 지능의 한 분야로, 컴퓨터가 학습할 수 있도록 하는 알고리즘과 기술을 개발하는 분입니다.
+ 데이터 마이닝: 정형화된 데이터를 중심으로 분석하고 이해하고 예측하는 분야
+ 지도학습 (Supervised learning): 정답을 주고 학습시키는 머신러닝의 방법론. 대표적으로 regression과 classification이 입니다.
+ 비지도학습 (Unsupervised learning): 정답없는 데이터를 어떻게 구성되었는지를 알아내는 머신러닝의 학습 방법론. 지도 학습 혹은 강화 학습과는 달리 입력값에 대한 목표치가 주어지지 않습니다.
+ 강화학습 (Reinforcement Learning): 설정된 환경속에 보상을 주며 학습하는 머신러닝의 학습 방법론입니다.
+ Representation Learning: 부분적인 특징을 찾는 것이 아닌 하나의 뉴럴 넷 모델로 전체의 특징을 학습하는 것을 의미합니다.
+ 선형 회귀 (Linear Regression): 종속 변수 y와 한개 이상의 독립 변수 x와의 선형 상관 관계를 모델링하는 회귀분석 기법입니다. [위키링크](https://ko.wikipedia.org/wiki/%EC%84%A0%ED%98%95_%ED%9A%8C%EA%B7%80)
+ 자연어처리 (NLP): 인간의 언어 형상을 컴퓨터와 같은 기계를 이용해서 모사 할 수 있도록 연구하고 이를 구현하는 인공지능의 주요 분야 중 하나입니다. [위키링크](https://ko.wikipedia.org/wiki/%EC%9E%90%EC%97%B0%EC%96%B4_%EC%B2%98%EB%A6%AC)
+ 학습 데이터 (Training data): 모델을 학습시킬 때 사용할 데이터입니다. 학습데이터로 학습 후 모델의 여러 파라미터들을 결정합니다.
+ 테스트 데이터 (Test data): 실제 학습된 모델을 평가하는데 사용되는 데이터입니다.

## AL / ML

### macine learning vs ?

+ Machine Learning VS big data
  + machine learning : big data를 다루는 방법론 중 요즘 많이 사용되고 있는 것 중하나
  + big data : just 데이터가 많은 것
+ Machine Learning VS data mining
  + data mining : 정형화 된 데이터. ex) 사람의 나이, 성별, 거주 지역
  + machine learning : 비정형화 된 데이터. ex) 이미지, 뉴스 토픽 등
+ Machine Learning VS AI(Artificial Intelligence)
  + AI : 
  + macine learninig : AI의 일부분
+ machine learning vs statistics
  + statistics : 머신러닝을 할 모델을 만들어주는.
  + machine learning : 자료가 빈 곳들을 들어가 통계학의 구멍을 매꾸어줄 수 있다.





### ML의 종류?

+ Supervised Learning : 지도학습
+ Unsupervised Learning : 비지도학습
+ Representation Learning : 딥러닝?
+ (Reinforcement Learning) - not covered today : 강화학습





### 지도학습

+ 사람들이 쉽게 생각할 수 있는 ML
+ 학습시킬 때에 레이블(Lable)을 붙여서 학습 시킨 후 test에 대해 분류(classification)을 하는 것.



#### 지도학습의 모델?

+ 선형 모델 : 

   ![1561421861309](img/1561421861309.png)

  + 

+ 비선형 모델 : decision trees

  ![1561421855371](img/1561421855371.png)



#### 지도학습의 한계점?

+ 정답이 주어져야 하는데 그것에 대해 모든 것을 줄 수 없기 때문에 어렵다.





### 비지도학습

+ 레이블이 주어지지 않은 것을 학습시키는 방법

+ K-menas clustering=> 몇 개의 그룹으로 나눠서 사용할것?

  ![1561422146192](img/1561422146192.png)

  그림에 따라서 몇 개의 그룹으로 나눌지 설정할 수 있다.

  여기서 오류는

  ![1561422204709](img/1561422204709.png)

  이렇게 생긴 것은 컴퓨터가 나눈것 처럼 단순하게 구분할 수 없다.

  

+ DB Scan

  ![1561422251044](img/1561422251044.png)

  결국 다른 방식을 이용해서 구분을 해야만 한다.

  임의의 데이터 포인트 하나를 이용해서 가까운 점들을 이용해서 세력을 키우는 식으로 학습을 한다.

  

  

### 강화학습

+ Neural Networks
+ 2000년에 들어오면서 데이터가 엄청나게 커진다. 
+ facial recognition
  + 예전에 해봤던 것. 
  + ![1561422632234](img/1561422632234.png)
  + 이것들은 각각의 필터를 만들어서 학습시켰지만, 그것을 넘어 하나의 뉴럴로 학습을 시킬 수 있게 만드는 것이다.
+ 왜 지금 강화학습이 뜨는가?
  + 좋은 모델. 직관적으로 이해 가능. 계산 가능. 표현력 풍부. 
  + 예전에는 학습할만한 데이터 량이 없었고, 컴퓨테이션도 좋지 않았지만, 2000년대 들어오면서 확 좋아졌다.
  + 이후 오버핏 되는것을 막기 위해 드롭아웃처럼, 컴퓨터만이 할 수 있는 작은 디테일(하나만 있으면 이것이 답이다.)을 없애는 방식을 만들었다.





구글 duplex

![1561423267693](img/1561423267693.png)















