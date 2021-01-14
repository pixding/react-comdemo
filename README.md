### 项目生成

### 安装eslint
- 详见 .eslintrc.js
- 需要安装 typescript, parser包，

#### 安装babel 
- @babel/cli 是命令行工具 babel-loader 
- @babel/core 是核心文件
- @babel/preset-env 预设的转换
- @babel/preset-react 
- @babel/preset-typescript  （babel和typescript，都可以转换ts，区别是什么）
  * typescript 只能设置target来确定转换规则，babel 可能通过targets来具体配置 compat-table， 如可选属性链。obj?.foo?.bar
  * 
- babel 的 preset-env和transform-runtime为什么转换了两次generator?
#### 常用的插件
- @babel/plugin-transform-runtime  复用工具函数，避免包过大，会自动安装@babel/runtime 
- babel-plugin-import 来避免加载无用内容 原理
- 

#### 

