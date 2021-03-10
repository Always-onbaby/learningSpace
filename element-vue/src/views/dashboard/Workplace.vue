<template>
    <div class="RichContent">
      {{msg}}
  </div>
</template>
<script>
import {os} from '@/utils/util'
export default {
  data() {
    return {
      msg: os().isPc ? 'PC' : 'iphone'
    }
  }
}
</script>