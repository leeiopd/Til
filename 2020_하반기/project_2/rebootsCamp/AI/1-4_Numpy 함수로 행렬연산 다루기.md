# 1-4_Numpy 함수로 행렬연산 다루기

> Numpy는 행렬과 관련된 여러 편리한 연산과 기능들을 제공하고 있습니다. 행렬의 곱, 전치 행렬, 역행렬 등을 간편하게 구할 수 있게끔 합니다.
>
> 이번 시간에는 Numpy의 함수를 이용해서 행렬의 여러 연산들을 적용하여 봅시다.



**행렬의 연산과 관련된 함수들**

- np.transpose(x) / (ndarray)x.T: 배열 x의 전치 행렬을 나타낸다.
- np.dot(x, y): 배열 x와 y의 행렬곱을 나타낸다.
- (ndarray)x * (ndarray)y : 행렬x와 y의 요소별 곱을 나타낸다.
- np.linalg.inv(x): 행렬 x의 역행렬을 배열로 나타낸다.



## 실습

1. array1과 array1의 전치 행렬의 행렬곱을 구해보자.
2. array1과 array1의 전치 행렬의 요소별 곱을 구해보자.
3. array2의 역행렬을 만들어보자.
4. array2와 array2의 역행렬을 곱한 행렬을 만들어보자.



## 코드

```python
import numpy as np

array1 = np.array([[1,2,3], [4,5,6], [7,8,9]])

#array1의 전치 행렬을 구해보자.
transposed = np.transpose(array1)
print(transposed, '는 array1을 전치한 행렬입니다.')    

#array1과 array1의 전치 행렬의 행렬곱을 구해보자.
power = np.dot(array1, transposed)
print(power,'는 array1과 array1의 전치 행렬을 행렬곱한 것입니다.')

#array1과 array1의 전치 행렬의 요소별 곱을 구해보자.
elementwise_prod = np.multiply(array1, transposed)
print(elementwise_prod, '는 array1과 array1의 전치행렬을 요소별로 곱한 행렬입니다.')


array2 = np.array([[2,3],[1,7]])

# array2의 역행렬을 만들어보자.
inverse_array2 = np.linalg.inv(array2)
print(inverse_array2,'는 array2의 역행렬입니다.')

# array2와 array2의 역행렬을 곱한 행렬을 만들어보자.
producted = np.dot(array2, inverse_array2)
print(producted,'는 array2와 array2의 역행렬을 곱한 행렬입니다.')
```

