# 빅데이터

#### 빅데이터 분석과 병렬 분산 처리 알고리즘

* Moore의 법칙의 시대가 막을 내리는 중
* Scale-out 
  * 아주 많은 값싼 commodity low-end 서버들 이용
* Scale-up
  * 적은 수의 값비싼 high-end 서버 이용
* Data-intensive한 분야에서는 아주 많은 값싼 commodity low-end 서버들을 이용하는 것을 선호
* High--end machine들은 가격에 관젬에서는 선형으로 성능이  증가하지 않음
  * 두 배의 프로세설를 가진 한 대의 컴퓨터의 가격이 한 개의 프로세서를 가진 한 대의 컴퓨터 가격의 두 배보다 훨씬 더 비쌈

#### 빅데이터 분석과 맵리듀스(MapReduce)

* 빅데이터를 처리
  * 한대의 컴퓨터 능력으로는 처리가 어려움
  * 근본적으로 수십대부터 수천대의 컴퓨터를 묶어서 처리해야 함
* 맵리듀스는 대규모로 컴퓨팅을 잘 분산 병렬로 처리할 수 있도록 해준 첫번째 프로그래밍 모델
* 빅 데이터를 이용한 데이터 처리가 많은 응용분야에서 최근에 각광받기 시작
* 컴퓨터의 클러스터 상에서 빅 데이터를 처리하기 위한 병렬 분산 알고리즘을 쉽게 개발할 수 있게 해주는 단순한 프로그래밍 모델
* Google의 맵리듀스 또는 오픈 소스 커뮤너티의 맵 리듀스 프레임워크의 우수한 구현인 하둡(Hadoop)
* 유저가 map, reduce 그리고 main함수들만 프로그래밍해주면 됨

#### 빅데이터 분석과 하둡(Hadoop)

* Apache 프로젝트의 MapReduce의 오픈소스
* HDFS



## 프로젝트 설명

* 추천시스템
* 영화 평점 데이터를 이용해서 유사한 유저들 또는 유사한 영화들을 보여주며 여러가지 클러스터링 알고리즘들을 이용해서 분석
* 영화 평점 빅 데이터를 이용하여 추천 시스템의 방법중에 하나인 협업 필터링의 여러 알고리즘들을 Python 언어로 효율적으로 구현하여 실제 회사에 취업 시에 필요한 지식과 코딩 능력 배양

* Django를 이용하여 실제 어플리케이션의 UI 구현
* python numpy, scipy라이브러리 사용, 행렬 표현하고 연산하는 기본적인 함수들을 이해하고 효율적으로 사용하는 것을 배움
* Sparse matrix(희소행렬) 형태의 데이터를 array에 그대로 저장하면 비효율적
* python numpy라이브러리의 행렬 연산과 scipy라이브러리의 sparse matrix format을 이용하여 효율적인 코딩
* django의 python으로 구현하여 MovieLens 영화 데이터의 평점 행렬을 보고 각 유저에 대해서 유사한 유저와 각 영화별로 유사한 영화들을 보여주는 코드 구현
* 여러가지 클러스터링 알고리즘들을 이해, python 라이브러리에 있는 알고리즘을 이요해서 데이터를 분석하는 법 습득

* 영화 추천 시스템에 대한 이해
* 추천에 이용되는 협업 필터링 주요 알고리즘 이해
* 빅데이터 분석에 많이 쓰이는 probabilistic modeling기술 습득
* 영화 평점 외에 영화에 대한 다른 정보도 이용하는 알고리즘 구현
* python을 사용하여 빅데이터 처리에 효율적인 코딩 실습
  * python이 제공하는 broadcasting기법을 써서 더 효율적으로 행렬 연산
* 개발 환경 구성
  * python 최신 버전
  * 윈도우의 cmd를 관리자 모드로 생성한 다음 pip install numpy, pip install scipy를 설치
  * python 환경을 위한 virtualendvwrapper설치
  * django 설치
  * 샘플로 제공되는 movieRecProject.zip파일을 C:\User\Shim디렉도리에 unzip

* 프로젝트 더 도전적으로 즐기기!
  * 샘플 코드의 UI를 더욱 예쁘게 디자인
  * 영화에 대한 포스터나 예고편, 동영상, 리뷰 등을 같이 추천할 때 함께 보여줌
  * 멀티 코어나 GPU를 잘 이용하도록 python코드 구현
  * 현재는 영화 줄거리 텍스트만 이용하는데 다른 정보도 추천에 사용
  * 기계학습 툴들을 이용하여 PLSI 대신에 딥 러닝 알고리즘을 접목
  * 하둡의 MapReduce 프레임워크를 이용하여 병렬분산으로 3가지 알고리즘 구현(python 가능)
  * 더 복잡한 실제 데이터를 이용한 추천 시스템 개발
    * 트위터에서 유저들에게 관심이 가는 트윗 메세지나 팔로우할 사람들을 추천

### Recommandation Systems

* content based filtering method
  * item이나 product등과 같은 actual content를 이용
  * 각 item간의 similarity를 이용해서 추천
* Collaborative filtering method
  * 각각의 유저는 비슷한 다른 유저와 동일하게 행동한다는 가정 - 다른 유저들이 추천에 영향을 끼침

### Collaborative Filtering Method

* 각각의 유저는 비슷한 다른 유저와 동일하게 행동
  * 다른 유저들이 추천에 영향을 끼침
  * usage또는 preference pattern을 이용
* Memory based method



