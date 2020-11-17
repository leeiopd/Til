# 01. ML의 용어와 개념 & TensorFlow의 기본

- ML
  - 판단 프로그램
    - spam filter : 너무 많은 룰
    - Automatic driving : 너무 많은 룰
  - Arthur Samuel(1959)
    - 많은 룰 대신 직접 상황 판단을 하도록 프로그래밍 하자



* Supervised / Unsupervised learing
  * Supervised - 정해진 데이터 (training set) 로 학습
    * ex) 고양이와 강아지를 구분
      * 고양이 사진 데이터 학습
      * 강아지 사진 데이터 학습
    * 일반적인 ML
      * Image labeling - 태그가 작성된 이미지를 학습
      * Email spam filter - 이메일에 spam/ham 태그를 작성하여 학습
      * Predicting exam score - 이전 성적과 공부 시간에 대해 학습
  * Unsupervised - 데이터를 통해 스스로 학습
    * ex) 유사한 단어들의 Grouping
      * Google news grouping
      * Word clustering



* Types of Supervised learning
  * Predicting final exam score based on time spent
    * regression - 판단되는 성적의 범위가 0~100까지 처럼 범위가 넓음
  * Pass/Non-pass based on time spent
    * binary classification - T/F 2가지로 판단
  * Letter grade (A, B, C, E and F) based on time spent
    * multi-label classification - 판단되는 성적의 범위가 비교적 넓지 않음



* TensorFlow

  * Data flow graphs 를 사용하여 numerical 한 계산을 할 수 있는 library
    * Data flow graph
      * 그래프의 Node는 수학적 연산을 의미
      * Edge 는 다차원 데이터 배열 (텐서) 를 의미
    * 데이터(텐서)가 grpah를 따라 흐른다(움직인다)고 하여 TensorFlow
  * Python 으로 구동 가능하다



* 기본 예제

  ```python
  import tensorflow as tf
  
  # Create a constant op
  # This op is added as a node to the default graph
  # constant 라는 node 를 생성
  hello = tf.constant("hello")
  
  # start a TF session
  sess = tf.Session()
  
  # run the op and get result
  print(sess.run(hello))
  ```

  * b "Hello"
  * b'String' 'b' indicateds Bytes literals



* Computational Graph - 더하기 그래프

  ```python
  node1 = tf.constant(3.0, tf.float32)
  node2 = tf.constant(4.0)
  node3 = tf.add(node1, node2)
  
  print("node1:", node1, "node2", node2)
  # -> node1: Tensor("Const_1:0", shape=(), dtype=float32) node2 Tensor("Const_2:0", shape=(), dtype=float32)
  
  print("node3:", node3)
  # -> node3: Tensor("Add:0", shape=(), dtype=float32)
  
  ## node1~3이 Tensor라고 출력됨
  
  sess = tf.Session()
  print("sess.run(node1, node2):" ,sess.run([node1, node2]))
  # -> sess.run(node1, node2): [3.0, 4.0]
  
  print("sess.run(node3):", sess.run(node3))
  # -> sess.run(node3): 7.0
  ```

  * 동작
    1. 그래프를 Build
    2. sess(세션)을 만들고 sess.run(op) 를 통해 그래프를 실행
    3. 결과 출력



* Placeholder 로 그래프 생성

  ```python
  a = tf.placeholder(tf.float32)
  b = tf.placeholder(tf.float32)
  adder_node = a+b
  
  print(sess.run(adder_node, feed_dict = {a:3, b:4.5}))
  # -> 7.5
  
  print(sess.run(adder_node, feed_dict = {a:[1, 3], b:[2, 4]}))
  # -> [3. 7.]
  ```

  



* Tensor Ranks, Shapes, and Types

  * Rank - 차원

    | Rank | Math entity | ex                                                          |
    | ---- | ----------- | ----------------------------------------------------------- |
    | 0    | Scalar      | s = 486                                                     |
    | 1    | Vector      | v = [1.1, 2.2, 3.3]                                         |
    | 2    | Matrix      | m = [[1, 2, 3], [4, 5, 6]]                                  |
    | 3    | 3-Tensor    | t = [[[2], [4], [6]], [[8], [10], [12]], [[14], [16], 18]]] |
    | n    | n-Tensor    | ...                                                         |

    

  * Shape - 각각의 Rank에 몇개씩 가지고 있는가

    | Rank | Shape           | Dimension Number | ex                                  |
    | ---- | --------------- | ---------------- | ----------------------------------- |
    | 0    | []              | 0-D              | A 0-D tensor. A scalar              |
    | 1    | [D0]            | 1-D              | A 1-D tensor with shape [5].        |
    | 2    | [D0, D1]        | 2-D              | A 2-D tensor with shpae [3, 4]      |
    | 3    | [D0, D1, D2]    | 3-D              | A 3-D tensor with shape [1, 4, 3]   |
    | n    | [D0, ..., Dn-1] | n-D              | A tensor with shape [D0, ..., Dn-1] |

    * t = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
      * shape 은 (3, 3) 또는 [3, 3]

  * Types

    | Data type | Python type | Description            |
    | --------- | ----------- | ---------------------- |
    | DT_FLOAT  | tf.float32  | 32 bits floating point |
    | DT_DOUBLE | tf.float64  | 64 bits floating point |
    | DT_INT8   | tf.int8     | 8 bits signed integer  |
    | DT_INT16  | tf.int16    | 16 bits signed integer |
    | DT_INT32  | tf.int32    | 32 bits signed integer |
    | DT_INT64  | tf.int64    | 64 bits signed integer |
    | ...       |             |                        |

    

