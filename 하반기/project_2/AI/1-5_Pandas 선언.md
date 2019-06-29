# 1-5_Pandas 선언

> Pandas는 데이터 분석 기능을 제공하는 라이브러리로 csv, xls 파일 등의 데이터를 읽고 원하는 데이터 형식으로 변환해줍니다.
>
> 자주 사용되는 라이브러리 중 하나로 주로 pd 라고 줄여 사용하게 됩니다.
>
> ### 1. Series
>
> pd.Series는 1차원 데이터를 다룰 때 사용합니다. 변수를 출력해보면 인덱스 번호와 이름, 자료형도 함께 출력됩니다.
>
> ### 2. DataFrame
>
> DataFrame은 Series와 달리 여러개의 column을 가질 수 있습니다.
>
> DataFrame을 정의할 때는 2차원 리스트를 매개 변수로 전달하며 여러개의 Series 데이터를 합쳐 DataFrame을 만들 수도 있습니다.



**Series/ DataFrame 생성 함수**

- Series(data, name): data를 name 이라는 이름의 Series형태로 만들어 줍니다.
- DataFrame(data): data를 DataFrame 구조로 만들어 줍니다.



## 실습

1. 1차원 데이터를 Series 형태로 만들어 보세요.
2. Dictionary 데이터를 Series 형태로 만들어 보세요.
3. 2차원 데이터를 DataFrame 형태로 만들어 보세요.



## 코드

```python
import pandas as pd

def main():
    # Series()를 사용하여 1차원 데이터를 만들어보세요.
    # 5개의 age 데이터와 이름을 age로 선언해보세요.
    data = [19, 18, 27, 22, 33]
    age = pd.Series(data)
    
    # Python Dictionary 형태의 데이터가 있습니다.
    # class_name 데이터를 Series로 만들어보세요.
    class_name = {'국어' : 90,'영어' : 70,'수학' : 100,'과학' : 80}
    class_name = pd.Series(class_name)
    print(class_name,'\n')
    
    
    # DataFrame 만들기
    # DataFrame()을 사용하여 2차원 데이터를 생성해보세요.
    # index와 columns 값을 설정해보세요.
    data=[['name', 'age'],['철수',15],['영희',23],['민수',20],['다희', 18],['지수',20]]
    data = pd.DataFrame(data)
    print(data,'\n')
    
    
if __name__ == "__main__":
    main()

```

