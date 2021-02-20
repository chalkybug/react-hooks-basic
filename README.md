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


