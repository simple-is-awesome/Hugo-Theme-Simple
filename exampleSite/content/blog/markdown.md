---
title: "Markdown Syntax"
date: 2023-03-14T00:00:00+08:00
draft: false
tags: ["markdown"]
slug: "markdown-syntax"
summary: "Test markdown syntax under this blog theme."
showtoc: false
---

## 1、标题

代码：

```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

效果：

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

## 2、脚注

代码：

```
Google[^1]

Bing[^2]

ChatGPT[^3]


[^1]:https://google.com

[^2]:https://www.bing.com

[^3]:https://chat.openai.com
```

效果：

Google[^1]

Bing[^2]

ChatGPT[^3]


[^1]:https://google.com

[^2]:https://www.bing.com

[^3]:https://chat.openai.com

## 3、代码

### 3.1、行内代码：

代码：

```
`echo "hello world"`
```

效果：

`echo "hello world"`

###  3.2、代码块

代码：

<pre><code>
```c
# include <stdio.h>

int main(){
    printf("hello world");
}
```

```python
print("hello world")
```

```javascript
console.log("hello world")
```
</code></pre>

效果：

```C
# include <stdio.h>

int main(){
    printf("hello world");
}
```

```python
print("hello world")
```

```javascript
console.log("hello world")
```


## 4、字体样式

代码：

```
**加粗**

*斜体*

~~删除线~~

```

效果：

**加粗**

*斜体*

~~删除线~~


## 5、超链接

代码：

```
[Google](https://google.com)

[Bing](https://www.bing.com)

[ChatGPT](https://chat.openai.com)
```

效果：

[Google](https://google.com)

[Bing](https://www.bing.com)

[ChatGPT](https://chat.openai.com)

## 6、图片

代码：

```
![Great Wall](https://vip2.loli.net/2023/03/14/F25Uehy3nXQlVPT.webp)
```

效果：

![Great Wall](https://vip2.loli.net/2023/03/14/F25Uehy3nXQlVPT.webp)

## 7、列表

### 7.1、无序列表

代码：

```
- 北京
- 江苏
  - 南京
  - 南通
    - 海门
```

效果：

- 北京
- 江苏
  - 南京
  - 南通
    - 海门

### 7.2、有序列表

代码：

```
1. 春天
2. 夏天
   1. 立夏
   2. 夏至
```

效果：

1. 春天
2. 夏天
   1. 立夏
   2. 夏至


### 7.3、任务列表

代码：

```
- [X] 吃饭
- [ ] 睡觉
- [ ] 打豆豆
```

效果：

- [X] 吃饭
- [ ] 睡觉
- [ ] 打豆豆





## 8、引用

代码：

```
> 民主不是装饰品，不是用来做摆设的，而是要用来解决人民需要解决的问题的。”
>
> 一个国家民主不民主，关键在于是不是真正做到了人民当家作主，要看人民有没有投票权，更要看人民有没有广泛参与权；
>
> 要看人民在选举过程中得到了什么口头许诺，更要看选举后这些承诺实现了多少；
>
> 要看制度和法律规定了什么样的政治程序和政治规则，更要看这些制度和法律是不是真正得到了执行；
>
> 要看权力运行规则和程序是否民主，更要看权力是否真正受到人民监督和制约。

> 摘自《学习强国》
```

效果：

> 民主不是装饰品，不是用来做摆设的，而是要用来解决人民需要解决的问题的。”
> 
> 一个国家民主不民主，关键在于是不是真正做到了人民当家作主，要看人民有没有投票权，更要看人民有没有广泛参与权；
> 
> 要看人民在选举过程中得到了什么口头许诺，更要看选举后这些承诺实现了多少；
> 
> 要看制度和法律规定了什么样的政治程序和政治规则，更要看这些制度和法律是不是真正得到了执行；
> 
> 要看权力运行规则和程序是否民主，更要看权力是否真正受到人民监督和制约。
> 摘自《学习强国》

## 9、表格

代码:

```
| 姓名 | 年龄 | 性别 |
| :--: | :--: | :--: |
| 张三 | 20 | 男 |
| 李四 | 21 | 女 |
```

效果：

| 姓名 | 年龄 | 性别 |
| :--: | :--: | :--: |
| 张三 | 20 | 男 |
| 李四 | 21 | 女 |