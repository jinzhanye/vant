<script setup lang="ts">
import VanCell from '../../cell';
import VanConfigProvider from '../../config-provider';
import VanStepper from '..';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import { Toast } from '../../toast';
import { StepperInstance } from '../../stepper';

const t = useTranslate({
  'zh-CN': {
    step: '步长设置',
    range: '限制输入范围',
    integer: '限制输入整数',
    roundTheme: '圆角风格',
    customSize: '自定义大小',
    beforeChange: '异步变更',
    disableInput: '禁用输入框',
    decimalLength: '固定小数位数',
    customButton: '自定义按钮样式',
  },
  'en-US': {
    step: 'Step',
    range: 'Range',
    integer: 'Integer',
    roundTheme: 'Round Theme',
    customSize: 'Custom Size',
    beforeChange: 'Before Change',
    disableInput: 'Disable Input',
    decimalLength: 'Decimal Length',
  },
});

const stepper1 = ref(1);
const stepper2 = ref(1);
const stepper3 = ref(1);
const stepper4 = ref(1);
const stepper5 = ref(1);
const stepper6 = ref(1);
const stepper7 = ref(1);
const stepper8 = ref(1);
const stepperRound = ref(1);
const disabledInput = ref(1);
const stepperCustomButton = ref(1);
const themeVars = {
  stepperBackgroundColor: '#fff',
  stepperInputTextColor: '#fcc09c',
  stepperInputHeight: '25px',
};

const customButtonStepper = ref<StepperInstance>();

const plus = () => {
  customButtonStepper.value?.plus();
};

const minus = () => {
  customButtonStepper.value?.minus();
};

const beforeChange = () => {
  Toast.loading({ forbidClick: true });

  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      Toast.clear();
      resolve(true);
    }, 500);
  });
};
</script>

<template>
  <demo-block card>
    <van-cell center :title="t('basicUsage')">
      <template #value>
        <van-stepper v-model="stepper1" />
      </template>
    </van-cell>

    <van-cell center :title="t('step')">
      <template #value>
        <van-stepper v-model="stepper2" step="2" />
      </template>
    </van-cell>

    <van-cell center :title="t('range')">
      <template #value>
        <van-stepper v-model="stepper3" :min="5" :max="8" />
      </template>
    </van-cell>

    <van-cell center :title="t('integer')">
      <template #value>
        <van-stepper v-model="stepper4" integer />
      </template>
    </van-cell>

    <van-cell center :title="t('disabled')">
      <template #value>
        <van-stepper v-model="stepper5" disabled />
      </template>
    </van-cell>

    <van-cell center :title="t('disableInput')">
      <template #value>
        <van-stepper v-model="disabledInput" disable-input />
      </template>
    </van-cell>

    <van-cell center :title="t('decimalLength')">
      <template #value>
        <van-stepper v-model="stepper8" :decimal-length="1" step="0.2" />
      </template>
    </van-cell>

    <van-cell center :title="t('customSize')">
      <template #value>
        <van-stepper v-model="stepper7" button-size="32px" input-width="40px" />
      </template>
    </van-cell>

    <van-cell center :title="t('beforeChange')">
      <template #value>
        <van-stepper v-model="stepper6" :before-change="beforeChange" />
      </template>
    </van-cell>

    <van-cell center :title="t('roundTheme')">
      <template #value>
        <van-stepper
          v-model="stepperRound"
          theme="round"
          button-size="22"
          disable-input
        />
      </template>
    </van-cell>

    <van-cell center :title="t('customButton')">
      <template #value>
        <van-config-provider :theme-vars="themeVars">
          <div class="custom-button-demo">
            <button class="left-button" @click="minus">-</button>
            <div class="stepper-wrapper">
              <van-stepper
                ref="customButtonStepper"
                v-model="stepperCustomButton"
                :show-plus="false"
                :show-minus="false"
                disable-input
              />
            </div>
            <button class="right-button" @click="plus">+</button>
          </div>
        </van-config-provider>
      </template>
    </van-cell>
  </demo-block>
</template>

<style lang="less">
.demo-stepper {
  .custom-button-demo {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .stepper-wrapper {
      border-top: 1px solid #fcc09c;
      border-bottom: 1px solid #fcc09c;
    }

    button {
      height: 28px;
      width: 28px;
      border: 0;
      background: linear-gradient(0deg, #ff7c3b 0%, #ffc446 100%);
      box-shadow: 0 0 10px 1px rgba(254, 255, 254, 0.59) inset;
      font-size: 14px;
      color: #fff;
      cursor: pointer;

      &.left-button {
        border-top-left-radius: 35px;
        border-bottom-left-radius: 35px;
      }
      &.right-button {
        border-top-right-radius: 35px;
        border-bottom-right-radius: 35px;
      }
    }
  }
}
</style>
