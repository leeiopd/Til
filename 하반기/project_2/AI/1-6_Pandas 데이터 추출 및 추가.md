# 1-6_Pandas 데이터 추출 및 추가

>DataFrame에서 원하는 데이터를 추출하기 위해 loc(), iloc() 기능을 사용할 수 있습니다.
>
>- `loc()`: 명시적인 인덱스를 참조하는 인덱싱/슬라이싱
>- `iloc()` : 정수 인덱스 인덱싱/슬라이싱. 단 iloc의 경우 리스트와 같이 마지막 인덱스는 포함되지 않습니다.
>
>`loc`, `iloc` 함수에 Index 값을 입력하여 원하는 데이터 인덱스를 추출/ 추가할 수 있습니다.



## Pandas 데이터 삭제

`drop()` 기능을 이용하여 DataFrame의 Index 및 Column을 삭제할 수도 있습니다.

- `drop()` : index, column 삭제

`drop()`함수에 Index 값을 입력하여 원하는 데이터 인덱스를 삭제할 수 있습니다.



## 실습

1. `human` DataFrame을 만들어보세요.
2. `loc()` , `iloc()` 을 이용해 `age`를 추출해보세요.
3. `loc()` , `iloc()`을 이용해 `weight`와 `height`만 추출해보세요.
4. 새로운 데이터 `sex`를 `human`에 추가해보세요.
5. `drop()`으로 `human`에서 `height`를 삭제해보세요.



## 코드

```python
    from elice_utils import EliceUtils
    elice_utils = EliceUtils()
    import pandas as pd

    a = pd.Series([20, 15, 30, 25, 35], name='age')
    b = pd.Series([68.5, 60.3, 53.4, 74.1, 80.7], name='weight')
    c = pd.Series([180, 165, 155, 178, 185], name ='height')
    human = pd.DataFrame([a, b, c])

    def main():
        # loc(), iloc() 함수를 이용하여 특정 행, 열 추출 
        print(human.loc["age"],'\n')
        print(human.iloc[0],'\n')

        # loc(), iloc() 함수를 이용하여 데이터의 특정 범위 추출
        print(human.loc["weight": "height"],'\n')
        print(human.iloc[1: 2],'\n')

        sex = ['F','M','F','M','F']
        # 새로운 데이터 추가하기
        human.loc["sex"] = sex 
        print(human,'\n')

        #원하는 행/열 데이터 삭제하기
        tmp = human.drop(["height"])
        print(tmp,'\n')


    if __name__ == "__main__":
        main()
```

