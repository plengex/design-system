<script lang="ts">
import {
  defineComponent,
  h,
} from 'vue-demi'
import { findAllChildren, toBoolean } from '../utils/vnode'

export default defineComponent({
  props: {
    active: {
      type    : Number,
      required: true,
    },
  },
  setup (props, { slots }) {
    return () => {
      return findAllChildren(slots.default(), 'Tab')
        .map((vnode, index) => {
          const isDisabled = toBoolean(vnode.props?.disabled)
          const isActive   = index === props.active && !isDisabled

          return h(vnode, {
            dataTabid: index,
            style    : { display: isActive ? 'block' : 'none' },
          })
        })
    }
  },
})
</script>
