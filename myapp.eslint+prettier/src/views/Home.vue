<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" :id="massets + 'asdf'" />
    <div>{{ msg | predictionPipe(1, 2, 3, 4, 5) }}</div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import { predictionPipe } from '@/pipes/predictionPipe.ts';

interface Mm {
  aa: string;
}

@Component({
  name: 'home',
  components: {
    HelloWorld
  },
  filters: {
    predictionPipe
  }
})
export default class Home extends Vue {
  @Prop({ default: '' }) data = '';
  private massets: Mm = { aa: '' };
  private msg = 123;
  constructor() {
    super();
  }
  public aa(mm: any) {
    if (typeof mm === 'string') {
      console.log('aa');
    } else {
      return 'bb';
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  background-color: red;
  img {
    background-color: #fff;
  }
}
</style>
