<template>
  <f-field v-bind="{ ...$attrs, ...$props }" :role="role" #default="{ triggerValidation }">
    <div :class="wrapperClasses">
      <f-toggle-item v-for="(toggle, i) in toggles"
        v-bind="toggle"
        v-model="model"
        :type="type"
        :disabled="disabled"
        :name="id + ':toggles'"
        :key="id + i + type"
        @blur="triggerValidation" />
    </div>
  </f-field>
</template>

<script>
import { computed } from 'vue'
import { default as fField, fieldProps } from './f-field.vue'
import fToggleItem from './f-toggle-item.vue'
import { id } from '@finn-no/fabric-vue-utilities'
import { modelProps, createModel } from 'create-v-model'

export default {
  name: 'fToggle',
  components: { fField, fToggleItem },
  inheritAttrs: false,
  props: {
    ...fieldProps,
    radio: Boolean,
    checkbox: Boolean,
    radioButton: Boolean,
    equalWidth: Boolean,
    disabled: Boolean,
    toggles: {
      type: Array,
      required: true,
      validator: (v) => v.every(e => ('value' in e) && ('label' in e))
    }
  },
  setup: (props, { emit }) => ({
    model: createModel({ props, emit }),
    type: computed(() => (props.radio || props.radioButton) ? 'radio' : 'checkbox'),
    role: computed(() => props.toggles.length > 1 ? ((props.radio || props.radioButton) ? 'radiogroup' : 'group') : undefined),
    wrapperClasses: computed(() => ({
      'input-toggle--is-disabled': props.disabled && !props.radioButton,
      'segment-control': props.radioButton,
      'segment-control--justified': props.equalWidth,
      'segment-control--is-disabled': props.disabled && props.radioButton,
      'input-toggle': props.radio || props.checkbox
    }))
  })
}
</script>
