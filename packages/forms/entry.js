import { installer } from '@finn-no/fabric-vue-utilities'
import fField from './f-field.vue'
import fInput from './f-input.vue'
import fSelect from './f-select.vue'
import fToggle from './f-toggle.vue'
import fForm from './f-form.vue'

export default {
  install: installer([fField, fInput, fSelect, fToggle, fForm])
}

export * from './validation'
export { fInput, fSelect, fToggle, fField, fForm }
export { default as fSuffix } from './f-suffix.vue'
