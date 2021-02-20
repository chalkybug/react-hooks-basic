<style>
H1{color:Blue !important;}
H2{color:DarkOrange !important;}
p{color:Black !important;}
</style>

# react-hooks-basic

## Những phím tắt cần dùng cho VScode
- optimize import: `Alt + Shift + O for Windows`
- Gõ `rsfp` sau khi cài extention `Reactjs Code Snippets`: sinh code
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
