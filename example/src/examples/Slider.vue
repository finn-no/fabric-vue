<template>
  <div>
    <setup title="Slider" pkg-name="@finn-no/fabric-vue-slider" compName="fSlider" />

    <section-header label="Example" />

    <p class="text-right text-12">Value: {{ largeNumber }}</p>
    <f-slider v-model="largeNumber" :min="1000" :max="10_000_000" :step="1000" label="a large number slider" />

    <section-header label="Documentation" />

    <h4>Token</h4>
    <show-token :token="token" />

    <h4 class="mt-64 mb-16">Props</h4>
    <docs-table>
      <tr>
        <td>min</td>
        <td>number</td>
        <td>0</td>
      </tr>
      <tr>
        <td>max</td>
        <td>number</td>
        <td>100</td>
      </tr>
      <tr>
        <td>step</td>
        <td>number</td>
        <td></td>
      </tr>
      <tr>
        <td>label</td>
        <td>
          <div>string</div>
          <div class="annotation">Used for aria-label, or can use the labelled-by prop</div>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>labelled-by</td>
        <td>string</td>
        <td></td>
      </tr>
    </docs-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ShowToken, SectionHeader } from '../util.js'
import { fSlider } from '@finn-no/fabric-vue-slider'
import Setup from '../Setup.vue'
import DocsTable from '../DocsTable.vue'

const largeNumber = ref(3_000_000)
const token = `<f-slider v-model="largeNumber" :min="1000" :max="10_000_000" :step="1000" />`
</script>
