# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 04. Sequelize

##### 08_Moment.js 적용

* moment.js - 날짜 출력에 많이 사용되는 Library
  * https://momentjs.com/



```javascript
// JS 기본 날짜 형식 : Thu Aug 12 2021 23:13:24 GMT+0900 (대한민국 표준시)	
// 날짜 형식을 변환하기 위한 method : date()

var date = new Date(product.createdAt)
var month = date.getMonth()
var year = date.getFullYear()

console.log(month)
// M 
console.log(year)
// YYYY
```







```javascript
// ./models/Products.js

const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    description: { type: DataTypes.TEXT },
  });

  // 날짜 출력을 위한 method
  Products.prototype.dateFormat = (date) => {
    return moment(date).format("YYYY년 MM월 DD일");
  };

  return Products;
};
```

* Product 의 날짜형식을 편하게 출력하기 위해 moment 를 이용하여 method 를 만들어줌





```html
{% set title = "관리자 리스트" %} {{ message }}
{% extends "layout/base.html" %}
{% block content %}
<table class="table table-bordered table-hover">
  <tr>
    <th>제목</th>
    <th>가격</th>
    <th>작성일</th>
    <th>삭제</th>
  </tr>

  {% for product in products %}
  <tr>
    <td>
      <a href="/admin/products/detail/{{ product.id }}"> {{product.name}} </a>
    </td>
    <td>{{ product.price }}</td>
    
    <!-- moment를 사용한 method 로 날짜형식 출력 -->
    <td>{{ product.dateFormat(product.createdAt) }}</td>
    <td>{{ product.createdAt }}</td>
    <td>
      <a href="/admin/products/write" class="btn btn-danger">삭제</a>
    </td>
  </tr>
  {% endfor %}
</table>

<a href="/admin/products/write" class="btn btn-default">작성하기</a>
{% endblock %}
```

