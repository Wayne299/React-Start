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
在末尾 `export default CommentDetail;` 表示输出
在app.js前 `import CommentDetail from "./CommentDetail"` ./ 表示在当前文件夹下找/xx文件

作为component运用时，需要当作jsx tag，即 <CommentDetail />

 