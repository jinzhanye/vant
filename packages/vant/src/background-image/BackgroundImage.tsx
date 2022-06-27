import {
  ref,
  computed,
  defineComponent,
  type CSSProperties,
  type ExtractPropTypes,
} from 'vue';

import {
  addUnit,
  createNamespace,
  isDef,
  isNumeric,
  numericProp,
} from '../utils';

const [name, bem] = createNamespace('background-image');

const backgroundImageProps = {
  src: String,
  width: numericProp,
  height: numericProp,
  round: Boolean,
  remoteWidth: Number,
  remoteHeight: Number,
  backgroundSize: String,
  radius: numericProp,
  lazyLoad: Boolean,
};

export type BackgroundImageProps = ExtractPropTypes<
  typeof backgroundImageProps
>;

export default defineComponent({
  name,

  props: backgroundImageProps,

  setup(props, { slots }) {
    const imageRef = ref<HTMLElement>();

    const isRemoteImage = computed(() =>
      props.src?.includes('photo.zastatic.com')
    );

    const style = computed(() => {
      const result: CSSProperties = {
        width: addUnit(props.width),
        height: addUnit(props.height),
      };

      if (isDef(props.radius)) {
        result.overflow = 'hidden';
        result.borderRadius = addUnit(props.radius);
      }

      result.backgroundSize = 'contain';
      result.backgroundImage = `url(${props.src})`;

      const scaleFlag = 'imageMogr2/thumbnail/';
      if (isRemoteImage.value && !props.src?.includes(scaleFlag)) {
        const backgroundImage = `${props.src}?imageMogr2/thumbnail/`;

        const srcParams = [];

        // @ts-ignore
        if (isNumeric(props.width)) {
          srcParams.push(props.width);
        } else {
          srcParams.push('');
        }

        // @ts-ignore
        if (isNumeric(props.height)) {
          srcParams.push(props.height);
        } else {
          srcParams.push('');
        }

        result.backgroundImage = `url(${
          backgroundImage + srcParams.join('x')
        })`;
      }

      return result;
    });

    return () => (
      <div
        class={bem({ round: props.round })}
        ref={imageRef}
        style={style.value}
      >
        {slots.default?.()}
      </div>
    );
  },
});
