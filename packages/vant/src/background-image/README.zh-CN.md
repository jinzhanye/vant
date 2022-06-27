# BackgroundImage 背景图片

### 介绍

增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Image as VanImage } from 'vant';

const app = createApp();
app.use(VanImage);
```

## 代码演示

### 基础用法

基础用法与原生 `img` 标签相似，可以设置 `src`、`width`、`height`属性。

```html
<van-background-image
  width="100"
  height="100"
  src="https://photo.zastatic.com/images/common-cms/it/20210831/1630390128852_215401_t.jpg"
/>
```

### 填充模式

通过 `background-size` 属性可以设置图片填充模式，等同于原生的 [background-size ](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size) 属性，可选值见下方表格。

```html
<van-background-image
  width="10rem"
  height="10rem"
  background-size="cover"
  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
/>
```

### 圆形图片

通过 `round` 属性可以设置图片变圆，注意当图片宽高不相等且 `fit` 为 `contain` 或 `scale-down` 时，将无法填充一个完整的圆形。

```html
<van-background-image
  round
  width="10rem"
  height="10rem"
  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
/>
```

### 图片懒加载

设置 `lazy-load` 属性来开启图片懒加载，需要搭配 [Lazyload](#/zh-CN/lazyload) 组件使用。

```html
<van-background-image
  width="100"
  height="100"
  lazy-load
  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
/>
```

```js
import { createApp } from 'vue';
import { Lazyload } from 'vant';

const app = createApp();
app.use(Lazyload);
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片链接 | _string_ | - |
| background-size | 图片填充模式，等同于原生的 [background-size](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size) 属性 | _string_ | `contain` |
| width | 宽度，默认单位为 `px` | _number \| string_ | - |
| height | 高度，默认单位为 `px` | _number \| string_ | - |
| radius | 圆角大小，默认单位为 `px` | _number \| string_ | `0` |
| round | 是否显示为圆形 | _boolean_ | `false` |
| lazy-load | 是否开启图片懒加载，须配合 [Lazyload](#/zh-CN/lazyload) 组件使用 | _boolean_ | `false` |

### 图片填充模式

| 名称    | 含义                                                 |
| ------- | ---------------------------------------------------- |
| contain | 缩放背景图片以完全装入背景区，可能背景区部分空白     |
| cover   | 缩放背景图片以完全覆盖背景区，可能背景图片部分看不见 |
| auto    | 保持图片原有尺寸                                     |

### Events

| 事件名 | 说明           | 回调参数            |
| ------ | -------------- | ------------------- |
| click  | 点击图片时触发 | _event: MouseEvent_ |

### Slots

| 名称    | 说明                 |
| ------- | -------------------- |
| default | 自定义图片下方的内容 |

### 类型定义

组件导出以下类型定义：

```ts
import type { BackgroundImageProps } from 'vant';
```

## 常见问题

### 如何引用本地图片？

在 .vue 文件中通过相对路径引用本地图片时，需要在图片的链接外包上一层 `require()`，将图片 URL 转换为 webpack 模块请求，并结合 [file-loader](https://github.com/webpack-contrib/file-loader) 或者 [url-loader](https://github.com/webpack-contrib/url-loader) 进行处理。

```html
<!-- 错误写法 -->
<van-background-image src="./image.png" />

<!-- 正确写法 -->
<van-background-image :src="require('./image.png')" />
```

> 对此更详细的解释可以参考 vue-loader 的[处理资源路径](https://vue-loader.vuejs.org/zh/guide/asset-url.html)章节。
