<script setup lang="ts">
import VanRow from '../../row';
import VanBackgroundImage from '..';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    basicUsage: '基础用法',
    fitMode: '填充模式',
    position: '图片位置',
    round: '圆形图片',
  },
});

const image =
  'https://photo.zastatic.com/images/common-cms/it/20210831/1630390128852_215401_t.jpg';
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-row>
      <van-background-image width="100" height="100" :src="image" />
    </van-row>
  </demo-block>
</template>

<style lang="less">
.demo-image {
  overflow-x: hidden;
  background-color: var(--van-background-color-light);

  .van-row {
    padding: 0 var(--van-padding-md);
  }

  .van-col {
    margin-bottom: 20px;
  }

  .text {
    margin-top: 5px;
    color: var(--van-gray-7);
    font-size: 14px;
    text-align: center;
  }
}
</style>
