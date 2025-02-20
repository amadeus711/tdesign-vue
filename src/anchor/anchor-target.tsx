import Vue from 'vue';
import { FileCopyIcon } from 'tdesign-icons-vue';
import copyText from '../utils/clipboard';
import Message from '../message/plugin';
import props from './anchor-target-props';
import TPopup from '../popup';
import { COMPONENT_NAME } from './constant';

export default Vue.extend({
  name: 'TAnchorTarget',

  components: {
    TPopup,
    FileCopyIcon,
  },

  props: { ...props },

  methods: {
    /**
     * 复制当前target的链接
     *
     */
    copyText(): void {
      // 通过构造一个a标签, 自动拼接好传入的id为href
      const a = document.createElement('a');
      a.href = `#${this.id}`;
      copyText(a.href);
      Message.success('链接复制成功', 1000);
    },
  },
  render() {
    const {
      tag: Tag,
      $scopedSlots: { default: children },
      id,
    } = this;
    const className = [`${COMPONENT_NAME}__target`];
    const iconClassName = `${COMPONENT_NAME}__copy`;
    return (
      <Tag id={id} class={className}>
        {children && children(null)}
        <t-popup content="复制链接" placement="top" showArrow class={iconClassName}>
          <file-copy-icon nativeOnClick={this.copyText} />
        </t-popup>
      </Tag>
    );
  },
});
