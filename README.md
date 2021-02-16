<style>
H1{color:Blue !important;}
H2{color:DarkOrange !important;}
p{color:Black !important;}
</style>

# react-hooks-basic
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

## Cách dùng useState() đơn giản
1. Gõ rsfp sau khi cài extention `Reactjs Code Snippets`
2. Sử dụng scss cơ bản