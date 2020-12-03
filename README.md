# 쇼핑몰 미니게임 클론코딩

## 클론 프로젝트 참고
#### 쇼핑몰 미니게임
- https://www.youtube.com/watch?v=We2Kv1HMGvc&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=21

<br />

## 구현할 기능 목록
- 전체 상품 List 보여주기
- 상품 카테고리 List 정렬
- 상품 색깔별 List 정렬

<br />

## Data
```md
{
    "items": [
        {
            "type": "tshirt", 
            "gender": "female", 
            "size": "large", 
            "color": "pink", 
            "img": "../img/pink_t.png"
        },
        {
            "type": "pants", 
            "gender": "male", 
            "size": "small", 
            "color": "blue", 
            "img": "../img/blue_p.png"
        },
        {
            "type": "pants", 
            "gender": "male", 
            "size": "large", 
            "color": "yellow", 
            "img": "../img/yellow_p.png"
        },
        {
            "type": "skirt", 
            "gender": "female", 
            "size": "small", 
            "color": "pink", 
            "img": "../img/pink_s.png"
        },
        {
            "type": "tshirt", 
            "gender": "female", 
            "size": "small", 
            "color": "pink", 
            "img": "../img/pink_t.png"
        },
        {
            "type": "skirt", 
            "gender": "female", 
            "size": "small", 
            "color": "yellow", 
            "img": "../img/yellow_s.png"
        },
        {
            "type": "pants", 
            "gender": "female", 
            "size": "large", 
            "color": "pink", 
            "img": "../img/pink_p.png"
        },
        {
            "type": "tshirt", 
            "gender": "male", 
            "size": "large", 
            "color": "yellow", 
            "img": "../img/yellow_t.png"
        },
        {
            "type": "tshirt", 
            "gender": "male", 
            "size": "large", 
            "color": "blue", 
            "img": "../img/blue_t.png"
        }
    ]
}

```

<br />

## Note
### fetch 활용
자바스크립트를 사용하면 필요할 때 서버에 네트워크 요청을 보내고 새로운 정보를 받아오는 일을 할 수 있습니다.

- fetch함수를 사용하면 리소스를 비동기로 요청할 수 있습니다.
- fetch를 호출하면 브라우저는 요청을 보내고 Promise 객체를 반환합니다. 요청이 완료되면 성공 여부에 상관없이 Promise가 resolved 되어 Response 객체가 반환됩니다. (404, 500 같은 경우와 같은 응답 코드를 받은 경우는 에러를 일으키지 않습니다.)
- HTTP 요청이 완료되지 못한 상태라면 Promise가 rejected 됩니다. 이 경우 catch 메서드를 사용하여 에러를 처리할 수 있습니다. (네트워크 문제 및 존재하지 않는 사이트에 대한 요청에 해당합니다.)
- Response 객체는 응답에 대한 정보를 담고 있습니다. ok, status 속성을 이용하여 응답 성공 여부를 확인할 수 있습니다.


```js
fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
```

### 예제
```js
function loadItems() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}
```

<br />

### Project URL: https://jjongpang.github.io/js-shoppingList-deep-Project/



