This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React Start
### 9.10笔记
In the project directory, you can run:

- `npm start`
	Runs the app in the development mode.
	Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
	The page will reload if you make edits.
	You will also see any lint errors in the console.

- Convert to JSX format
 Inline Styling
 HTML: `<div style="background-color:red;">` 
 JSX: `<div style={{backgroundColor:'red'}}>`

 **区别**：
 - 第一个{} 表示里面是js格式的
 - 第二个{} 表示一个javascipt object 

- className 代替 class ， htmlFor 代替 for

- objects{}, JSX can't show
 在{}内，不能输入集合，但依然可以读取集合的value值。例如：buttonText.text
 
### 9.11笔记
- 在末尾 `export default CommentDetail;` 表示输出
 在app.js前 `import CommentDetail from "./CommentDetail"` ./ 表示在当前文件夹下找/xx文件

- 作为component运用时，需要当作jsx tag，即 <CommentDetail />

- parent -> child
 index.js `< CommentDetail author="Sam" />` **provide information**
 `author`: name of the props
 `Sam`: value of the prop

 component.js `const CommentDetail = props => {` **consume the information**
 `{props.author}`
 
- `<ApprovalCard> ... </ApprovalCard>` -> 需要用`{props.children}` 表示 ... 的内容

### 9.13笔记
- Functional component: good for simple content
- Class component: good for everything else
 - Async operation handling method: **Class component** 
- `constructor()`: the first method automaticaaly called
 - `constructor(props){ super(props); }`  IMPORTANT! 
 - `this.state = {lat:null}` initialize state. after call the service, then render the page
 - `this.setState({ lat: position.coords.latitude });`   call this.setState to update state // rerender the page
- conditionally rendering: 直接写if

### 9.16笔记
- **component lifecycle**:
 - constructor: setup / request some API (建议放在componentDidMount) 
 - render: return JSX
 - componentDidMount: data loading (one time job)
 - componentDidUpdate: data loading when state/props change (multiable data loading) 
 - componentWillUnmount: cleanup (non-React stuff)
 - other methods
- `state = {}` = `constructor(){this.state = {}}`  Babel帮助转化成后者
- `xxx.defaultProps = {message:"Loading"}`: a object of default props

