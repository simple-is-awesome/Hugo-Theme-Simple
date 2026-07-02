---
title: "Markdown Syntax"
date: 2023-03-14T00:00:00+08:00
draft: false
tags: ["markdown"]
slug: "markdown-syntax"
summary: "A tour of the Markdown syntax this theme supports."
showtoc: true
---

## 1. Headings

Code:

```
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

Result:

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

## 2. Footnotes

Code:

```
Google[^1]

Bing[^2]

ChatGPT[^3]


[^1]:https://google.com

[^2]:https://www.bing.com

[^3]:https://chat.openai.com
```

Result:

Google[^1]

Bing[^2]

ChatGPT[^3]


[^1]:https://google.com

[^2]:https://www.bing.com

[^3]:https://chat.openai.com

## 3. Code

### 3.1 Inline code

Code:

```
`echo "hello world"`
```

Result:

`echo "hello world"`

### 3.2 Code blocks

Code:

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

Result:

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


## 4. Text styles

Code:

```
**bold**

*italic*

~~strikethrough~~

```

Result:

**bold**

*italic*

~~strikethrough~~


## 5. Links

Code:

```
[Google](https://google.com)

[Bing](https://www.bing.com)

[ChatGPT](https://chat.openai.com)
```

Result:

[Google](https://google.com)

[Bing](https://www.bing.com)

[ChatGPT](https://chat.openai.com)

## 6. Images

Code:

```
![Demo image](/images/demo-screenshot.png)
```

Result:

![Demo image](/images/demo-screenshot.png)

## 7. Lists

### 7.1 Unordered lists

Code:

```
- Fruits
- Vegetables
  - Carrot
  - Potato
    - Sweet potato
```

Result:

- Fruits
- Vegetables
  - Carrot
  - Potato
    - Sweet potato

### 7.2 Ordered lists

Code:

```
1. Spring
2. Summer
   1. June
   2. July
```

Result:

1. Spring
2. Summer
   1. June
   2. July


### 7.3 Task lists

Code:

```
- [X] Eat
- [ ] Sleep
- [ ] Repeat
```

Result:

- [X] Eat
- [ ] Sleep
- [ ] Repeat


## 8. Blockquotes

Code:

```
> Life is really simple, but we insist on making it complicated.
>
> — Confucius
```

Result:

> Life is really simple, but we insist on making it complicated.
>
> — Confucius

## 9. Tables

Code:

```
| Name  | Age | Gender |
| :---: | :-: | :----: |
| Alice | 20  | F      |
| Bob   | 21  | M      |
```

Result:

| Name  | Age | Gender |
| :---: | :-: | :----: |
| Alice | 20  | F      |
| Bob   | 21  | M      |
