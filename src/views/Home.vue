<template>
  <h1>Home</h1>
  <div style="max-width: 250px; margin: 0 auto;">
    <ol>
      <li v-for="(listvalue, index) in listParam.list" :key="index">
        <input type="checkbox" v-model="listvalue.active" />
        <label :for="index">{{listvalue.caption}}</label>
      </li>
    </ol>
  </div>
  <button @click="sendQuery">Send</button>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Home',
  setup() {
    const route = useRouter()
    const listParam = reactive({
      list:
      [{
          value: 'V1',
          caption: 'Value 1',
          active: false
        }, {
          value: 'V2',
          caption: 'Value 2',
          active: false
        }, {
          value: 'V3',
          caption: 'Value 3',
          active: false
        }, {
          value: 'V4',
          caption: 'Value 4',
          active: false
        }, {
          value: 'V5',
          caption: 'Value 5',
          active: false
        }
      ]}
    )

    function sendQuery() {
      console.log(listParam)
      const params = listParam.list.filter(element => element.active === true).map(element => element.value)
      route.push({ name: 'Home', query: { search: params }})
    }

    return { listParam, sendQuery }
  }
}
</script>