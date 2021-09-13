<template>
  <div>{{ count }}</div>
  <button @click="increment">+1</button>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({
  watch: {
    count: (value) => {
      console.log(value);
    },
  },
})
export default class Counter extends Vue {
  count = 0;

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }
}
</script>

<template>
  <div>
    <button v-on:click="decrement">-</button>
    {{ count }}
    <button v-on:click="increment">+</button>
  </div>
</template>
