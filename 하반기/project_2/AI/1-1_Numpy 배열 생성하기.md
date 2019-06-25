# 1-1_Numpy 배열 생성하기

> 넘파이(Numpy)는 파이썬 기반의 고성능의 수치 계산을 위한 라이브러리입니다.
>
> 넘파이는 계산의 기반이 되는 배열(array)을 간편하게 생성할 수 있는 여러 가지 함수들을 제공하고 있습니다.
>
> 이번 실습에서 넘파이의 여러 함수들을 이용하여 배열을 생성하는 방법을 익혀봅니다.



**넘파이 배열을 생성하는 함수들**

- **np.array(list):** list를 넘파이 배열로 생성
- **np.zeros(shape):** 0 이 들어있는 배열 생성
- **np.ones(shape):** 1 이 들어있는 배열 생성
- **np.empty(shape):** 초기화가 없는 값으로 배열을 반환
- **np.arange(n ,m):** arange 함수를 이용하여 배열을 생성
- **np.linspace(start ,end, num-points):**linspace 함수를 이용하여 시작점과 끝 사이에 균일한 값을 주는 배열을 생성
- **np.random.randit(start end, array-size):**radom.randit함수를 이용하여 랜덤값으로 배열을 생성



## 실습

1. 파이썬 리스트로 만들어진 정수형 array를 만듭니다.
2. 파이썬 리스트로 만들어진 실수형 array 를 만듭니다.
3. 0으로 10개 채워진 정수형 array를 만듭니다.
4. 0부터 1사이에 균등하게 나눠진 5개의 값이 담긴 array를 만듭니다.
5. 0부터 10사이 랜덤한 값이 담긴 2x2 array 를 만듭니다.
6. 0부터 1사이에 균등하게 나눠진 5개의 값이 담긴 array를 만듭니다.
7. 0부터 10사이 랜덤한 값이 담긴 2x2 array를 만듭니다.



## 코드

```python
from elice_utils import EliceUtils
import numpy as np

elice_utils = EliceUtils()


def main():
	
    print("Array1: 파이썬 리스트로 만들어진 정수형 array")
    array1 = np.array([1,2,3])
    print("데이터:", array1)
    print("array의 자료형:", type(array1))
    print("dtype:", array1.dtype, "\n")

    print("Array2: 파이썬 리스트로 만들어진 실수형 array")
    array2 = np.array([1.1,1.2,1.3])
    print("데이터:", array2)
    print("dtype:", array2.dtype, "\n")

    print("Array3: 0으로 10개 채워진 정수형 array")
    array3 = np.zeros(10)
    print("데이터:", array3)
    print("dtype:", array3.dtype, "\n")

    print("Array4: 1으로 채워진 3x5형태 실수형 array")
    array4 = np.ones([3, 5])
    print("데이터:", array4)
    print("dtype:", array4.dtype, "\n")

    print("Array5: 0부터 9까지 담긴 정수형 array")
    array5 = np.arange(0, 10)
    print("데이터:", array5, "\n")

    print("Array6: 0부터 1사이에 균등하게 나눠진 5개의 값이 담긴 array")
    array6 = np.linspace(0, 1, 5)
    print("데이터:", array6, "\n")

    print("Array7: 0부터 10사이 랜덤한 값이 담긴 2x2 array")
    array7 = np.random.randint(0, 10, [2, 2])
    print("데이터:", array7, "\n")
    
    
if __name__ == "__main__":
    main()

```





* array1 = np.array() - 선언

* array1.shap - 어레이 행열 보기

* array_3d = np.zeros((2, 3, 4))

  ```python
  [[[0, 0, 0]]]
  ```

* np.sum(array, axis=0) - 세로방향 합

* np.sum(array, axis=1) - 가로방향 합

* B = np,ones((2, 3, 4, 5, 6)) - 다차원 array

* np.sum(B, axis = 3) - 다차원에서 5가 빠지고 2, 3, 4, 6 만남는 합이 생성