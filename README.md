<style>
H1{color:Blue !important;}
H2{color:DarkOrange !important;}
p{color:Black !important;}
</style>

# react-hooks-basic

## Những phím tắt cần dùng cho VScode
- optimize import: `Alt + Shift + O for Windows`
- Gõ `rsfp` sau khi cài extention `Reactjs Code Snippets`: sinh code
- Select các biến thì trỏ và `Ctrl + D`


## Cài đặt
1. `Ctrl + ~` để mở terminal
2. Chạy lênh npx create-react-app react-hooks-basic
3. Cài đặt extention cho VSCode
- Reactjs Code Snippets
- SCSS Formatter

## 02-useState() lưu ý
1. useState() là REPLACING chứ không phải là MERGING
- Solution: sử dụng ..array để copy mảng
```javascript
const [person,setPerson] = useState({name:'A', color:'red'});
setPerson({...person,color:'blue'});
//-> {name:'A', color:'blue'}

```
2. Giá trị khởi tạo của useState() dạng callback chỉ gọi một lần
- Solution: inital state callback chỉ chạy một lần
```javascript
function ColorBox(){
    const [color, setColor] = useState(() => {
        //this func will be called once
        const initColor = getAny();
        return initColor;
    })
}

```

## 03-Cách dùng useState() đơn giản
1. Gõ rsfp sau khi cài extention `Reactjs Code Snippets`
2. Sử dụng scss cơ bản


## 04-Cách dùng useState() đơn giản
Cho danh sách todos như bên dưới
```javascript
const todoList = [
    {id:1,title:'I love You'},
    {id:2,title:'We love You'},
    {id:3,title:'They love You'},
]

```
1. Render ds todos với dữ liệu được truyền từ component cha
2. khi click lên 1 item thì remove item đó khỏi danh sách


## 05-Cách dùng useState() đơn giản
Tạo một form đơn giản như sau
- Chứa một thẻ input để có thể nhập dữ liệu
- Khi form submit
    - Chặn trình duyệt reload
    - Tạo thêm một todo mới vào danh sách


## 06-Những điều cần biết về useEffect
#### Side effects là gì? Có bao nhiêu loại?

Side effects là gì?

- Gọi API lấy dữ liệu
- TƯơng tác với DOM
- Subscriptions
- setTimeout, setInterval

#### Theo tài liệu chính thức thì chia làm 2 loại side effects"
1. Effect không cần `clean up`: Gọi API, tương tác DOM
2. Effects `cần clean up`: Subscriptions, setTimeout, setInterval

#### Giới thiệu useEffect()

- là một hook cơ bản trong React hooks.
- Sử dụng cho side effects
- Mỗi hook gồm 2 phầm : `side effect` và `clean up`(optional)
- Được thực thi sau mỗi lần render
- Được thực thi ít nhất một lần sau lần render đầu tiên
- Những lần render sau, chỉ được thực thi nếu có dependencies thay đổi
- Effect cleanup sẽ được thực thi trước run effect lần tiếp theo hoặc unmount

#### Ví dụ

```javascript
function App(){
    //executed before each render
    const [color, setColor] = useState('pink');

    // executed after each render
    useEffect(()=>{
        // do your side effect here...
        return()=>{
            // Clean up here ...
            // Executed before the next render or unmount
        };
    },[]);
    
    //rendering
    return <h1>THe Font End</h1>

}

```

## 07- Gọi API với useEffect hooks
Lấy danh sách Posts từ server và hiển thị lên UI
Tạo một component PostList hiển thị một list ul, li đơn giản với props là danh sách posts.
1. Giới thiệu PostsAPI
Lấy danh sách posts
```
GET http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1
```
Trong đó:
- _limit: cho biết số posts mỗi trang
- _page: cho biết trang hiện tại
Kết quả mẫu trả về:
```json
{
"data": [
{
"id": "3dcbecdc-ec4c-4b71-b7f8-2379d2c4df98",
"title": "Quis vitae",
"author": "Shyann Weissnat",
"description": "omnis voluptatem id quo non vel corrupti voluptate
non eum ratione a laboriosam sit ut consequatur repellendus et fugiat non
eum consectetur aliquam voluptates et eius dolor possimus deleniti quis
molestias aspernatur sint voluptas quia voluptatem odit doloribus
distinctio dolores officia est ad dolores reprehenderit commodi
consequuntur vitae eaque tempore",
"createdAt": 1584839168726,
"updatedAt": 1584839168726,
"imageUrl": "https://picsum.photos/id/919/1368/400"
},
],
"pagination": {
"_page": 1,
"_limit": 1,
"_totalRows":50
    }
}

```

## 08- Pagination với useEffect hook
Cài đặt component Pagination
- Có 2 nút: Prev, Next
- Props:
    - pagination:required
    - onPageChange: hàm sẽ được gọi nếu user click nút next hoặc prev.
- State: N/A
- Render:
    - Nút prev: trigger hàm onPageChange với page = page - 1
    - Nút next: trigger hàm onPageChange với page = page + 1
- Lưu ý:
    - Nút prev sẽ bị disable nếu đang ở trang 1.
    - Nút next sẽ bị disable nếu đang ở trang cuối.

Cách sử dụng Pagination
```javascript
function App() {
const [pagination, setPagination] = useState({
_page: 1,
_limit: 10,
_totalRows: 1
});
function handlePageChange(newPage) {
// Call API to re-fetch data with newPage
}
return (
<Pagination
pagination={pagination}
onPageChange={handlePageChange}
/>
);
}
```

- cài đặt thư viện ` query-string`
    - npm i --save query-string




## 09 - useEffect search có debounce
- Props:
    - onSubmit: gọi hàm này mỗi khi có filterthay đổi.
- State: searchTerm
- Render: form > input[type=text]
- Lưu ý: đợi user nhập xong rồi mới gọi API (áp dụng kĩ thuật debounce đơn giản)
Cách sử dụng PostFiltersForm
```javascript
function App() {
    function handleFiltersChange(newFilters) {
        // Call API to re-fetch data with new filters
    }
    return (
        <PostFiltersForm onSubmit={handleFiltersChange} />
    );
}
```

## 10 - useEffect cleanup với code đồng hồ
- Select các biến thì trỏ và `Ctrl + D`
- Thêm `{}` thì bôi đen và nhấn `Shift + {` nhớ tắt vietkey
- Custom user snipnet để gõ nhanh hơn 
```
	"Const ": {
		"prefix": "const",
		"body": [
			"const [$1, $2] = useState($3);",
			"$4"
		],
		"description": "Const useState"
	}
```

## 11 - Giới thiệu tổng quát custom hooks (2020)




