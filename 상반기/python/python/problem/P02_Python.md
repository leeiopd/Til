## P02_Python

## 가상화폐 시세 판단하기

> 최고가와 최저가의 차이를 변동폭으로 정의할 때 (시가 + 변동폭)이 최고가 보다 높을 경우 "상승장", 그렇지 않은 경우 "하락장" 문자열을 출력하라.

| Key Name      | Description                    |
| ------------- | ------------------------------ |
| opeing_price  | 최근 24시간 내 시작 거래금액   |
| closing_price | 최근 24시간 내 마지막 거래금액 |
| min_price     | 최근 24시간 내 최저 거래금액   |
| max_price     | 최근 24시간 내 최고 거래금액   |

```python
import requests
btc = requests.get("https://api.bithumb.com/public/ticker/btc").json()['data']
print(btc)
```

```
{'opening_price': '4272000', 'closing_price': '4313000', 'min_price': '4240000', 'max_price': '4379000', 'average_price': '4304151.6918', 'units_traded': '15349.74465773', 'volume_1day': '15349.74465773', 'volume_7day': '42593.9967779', 'buy_price': '4312000', 'sell_price': '4313000', '24H_fluctate': '41000', '24H_fluctate_rate': '0.95', 'date': '1546478084505'}
```



```python
# 아래에 코드를 작성하세요.
diff = int(btc['max_price'])-int(btc['min_price'])
price = int(btc['opening_price']) + diff

if price > int(btc['max_price']):
    print("상승장")
else:
    print("하락장")
```

```
상승장
```



## 모든 가상화폐 시세 판단하기

> currrency dictionary에 담겨있는 모든 가상화폐 거래내역을 바탕으로 출력하라.
>
> 예외 처리에 유의하세요.

---

```
예시 출력)
BTC 상승장
ETH 상승장
DASH 상승장
LTC 하락장
ETC 하락장
XRP 상승장
BCH 상승장
...
```

```python
import pprint
currency = requests.get("https://api.bithumb.com/public/ticker/all").json()['data']
pprint.pprint(currency)
```

```
{'ABT': {'24H_fluctate': '-10',
         '24H_fluctate_rate': '-9.09',
         'average_price': '107.9286',
         'buy_price': '100',
         'closing_price': '100',
         'max_price': '128',
         'min_price': '92.8',
         'opening_price': '110',
         'sell_price': '104',
         'units_traded': '32401496.22875546',
         'volume_1day': '32401496.22875546',
         'volume_7day': '38621689.784271268873454882'},
...
```



```python
# 아래에 코드를 작성하세요.
for coin, i in currency.items():
    if 'max_price' in i:
        print(f'{coin}',end=' ')
        diff = float(i['max_price']) - float(i['min_price'])
        price = float(i['opening_price']) + diff

        if price > float(i['max_price']):
            print("상승장")
        else:
            print("하락장")
```

```
BTC 상승장
ETH 상승장
DASH 상승장
LTC 상승장
ETC 상승장
XRP 상승장
BCH 상승장
...
```



## 모음 제거하기

> 다음 문장의 모음을 제거하여 출력하세요.
---
```
예시 입력)
"Life is too short, you need python"
```

```
예시 출력)
Lf s t shrt, y nd pythn
```



```python
a = input()
# 아래에 코드를 작성하세요.
a = list(a)

b = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U','"']

for i in a:
    if i in b:
        continue
    else:
        print(i,end='')
```

```
"Life is too short, you need python"
Lf s t shrt, y nd pythn
```



```python
#타키쌤
result = ''
for char in a:
    if not char in b:
        result += char
        
print(result)
```

```
Lf s t shrt, y nd pythn
```



## 영어 이름 출력하기 

> 영어 이름은 가운데 이름을 가지고 있는 경우가 있습니다.
>
> 가운데 이름은 축약해서 나타내는 함수를 작성해보세요.

---

```
예시 입력)
Alice Betty Catherine Davis
```
```
예시 출력)
Alice B. C. Davis
```



```python
name = input()
# 아래에 코드를 작성하세요.
name = name.split()
long = len(name)
rename = []

for i in range(long):
    if i > 0 and i != (long-1):
        rename.append(name[i][0] + '.')
    else:
        rename.append(name[i])
        
for n in rename:
    print(n, end=' ')
```

```
Alice Betty Catherine Davis
Alice B. C. Davis 
```



```python
name = input()
#타키쌤
names = name.split()

for i in range(1, len(names)-1):
    names[i] = names[i][0] + '.'

print(' '.join(names))
```

```
Alice Betty Catherine Davis
Alice B. C. Davis
```



# 달력 출력하기

> 1월 1일 월요일부터 12월 31일까지 달력을 출력하세요.

---

```
예시 출력)
         1 월
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 31 
         2 월
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 

         3 월
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 31 
         4 월
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 
```



```python
day = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
for n in range(1,13):
    print("{0:^20}".format(f'{n} 월'))
    for d in day:
        print(d, end=' ')
    print()
    if n in [1, 3, 5, 7, 8, 10, 12]:
        for k in range(1,32):
            print("%2s"% k, end = ' ')
            if k % 7 == 0:
                print()
    elif n == 2:
        for k in range(1,29):
            print("%2s"% k, end = ' ')
            if k % 7 == 0:
                print()
    else:
        for k in range(1,31):
            print("%2s"% k, end = ' ')
            if k % 7 == 0:
                print()
        
    print('\n')
```

```
        1 월         
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 31 

        2 월         
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 


        3 월         
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 31 

        4 월         
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 

        5 월         
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 31 

        6 월         
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 

        7 월         
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 31 

        8 월         
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 31 

        9 월         
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 

        10 월        
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 31 

        11 월        
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 

        12 월        
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 31 

```



```python
#타키쌤
calendar = {1:31, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31}
week = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

for month, days in calendar.items():
    print("{0:^20}".format(f'{month} 월'))
    
    for d in week:
        print(d, end=' ')
    print()
    for day in range(1, days+1):
        print(f'{day:2}', end = ' ')
        if day % 7 == 0:
            print()
    print('\n')
```

```
        1 월         
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 31 

        2 월         
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 


        3 월         
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 31 

        4 월         
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 

        5 월         
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 31 

        6 월         
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 

        7 월         
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 31 

        8 월         
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 31 

        9 월         
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 

        10 월        
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 31 

        11 월        
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 

        12 월        
Mo Tu We Th Fr Sa Su 
 1  2  3  4  5  6  7 
 8  9 10 11 12 13 14 
15 16 17 18 19 20 21 
22 23 24 25 26 27 28 
29 30 31 
```

