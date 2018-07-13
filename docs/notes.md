## 星期二, 10. 七月 2018 11:07下午 

今天 学习了**log4js**框架，亮点如下：

1. 可配置：日志级别等等
2. Appenders：提供了多种日志输出功能，默认为**stdout**，还提供了file及email等其它输出模块；

> NOTE: Appenders是值得学习的设计模式，高内聚低耦合，并具有高度的可扩展性；

## 星期三, 11. 七月 2018 10:12下午 

今天学习了**mustache**框架，logic-less模板引擎，可以实现简单的if-else-end的逻辑判断，使用非常简单，大体如下所示：

```
var temp = "hello, {{ name }}!";
var result = mustache.render(temp, { name: 'xiaoming' });

// result = hello, xiaoming!
```

> NOTE: 没有freemarker的ftl功能强大，但是可以满足基本需要；