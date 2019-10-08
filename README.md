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

### 9.19笔记
- `onChange={this.onInputChange}` 不加()，避免每次加载都会call
 - onChange onClick onSubmit 都是特殊的prop，但并不是所有都有
 - `event.target.value` 表示text中的值 （ event是func(event) ）
- **controlled** vs **uncontrolled**
 - 将uncontrolled input 改为 controlled: 直接在component里找search term不需要在dom中找
 - store information inside the component:

	 ```
	 value={this.state.term} // 与原先的value相等 只是controlled思想
	 onChange={e => this.setState({ term: e.target.value})}
	 ```
- `event.preventDefault();` press <kbd>Enter</kbd> 不会刷新页面
-  What is 'this' used for in a class?  All class
-  How is the value of 'this' determined in a function? two solutions: 
 - `xxx = event => {}` 
 - `<form onSubmit={event =>this.xxx(event)} >`

### 9.27笔记
- `axios.get().then(response =>{})` 处理promise, ==get response==. 或者用下面的方法代替 

 ```
   async onSearchSubmit(term){             // async METHODNAME
   const response = await axios.get();   // await axios.get
   
   response.data.items 					// get response
 ``` 
- `onSearchSubmit = async (term) => {}` 规范成arrow function，防止this. 出现问题
- `export default axios.create()`
- `array.map( ()=>{} )` iterate every value to create a NEW array.
- implement keys in Lists: help React render list or update list

### 10.1笔记
```
const {urls, description} = this.props.image;
<img alt={description} src={urls} />

// this.props.image.urls   this.props.image.description

```

- **React Refs**
 - gives access to single DOM element (=document.querySelector())
 - creact refs in the constructor, assign them to instance variables, then pass to a particular JSX element as props
 - create ref

  ```
	constructor(props) {
		super(props);
		this.imageRef = React.createRef();
	}
	
	<img ref={this.imageRef} />
  ```
  
  - componentDidMount 中打印图片等的数据是❌的，这时图片还没有被下载，所以不能加载其中的数据 
     - `this.imageRef.current.addEventListener("load", this.setSpans)` 当load时再执行操作

- onTermSubmit onFormSubmit ❓
- 两种相同:

 ```
 const VideoList = props => {props.videos.length} 
 const VideoList = {videos} => {videos.length}
 ```