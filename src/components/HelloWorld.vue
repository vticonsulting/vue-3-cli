<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-bind:value="hello" type="text" />
    <hr />
    {{ hello }}
    {{ foo }}
    <kendo-dropdownlist
      ref="dropDownList"
      :data-source="dataSourceArray"
      :data-text-field="'text'"
      :data-value-field="'value'"
      :index="0"
    ></kendo-dropdownlist>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { DropDownList } from "@progress/kendo-dropdowns-vue-wrapper";

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  private dataSourceArray: Record<string, unknown> = [
    { text: "Small", value: "1" },
    { text: "Medium", value: "2" },
    { text: "Large", value: "3" },
    { text: "X-Large", value: "4" },
    { text: "2X-Large", value: "5" },
  ];
}

// export default class HelloWorld extends Vue {
//   msg!: string;

//   private dropDown!: kendo.ui.DropDownList;

//   private dataSourceArray: Array<object> = [
//     { text: "Small", value: "1" },
//     { text: "Medium", value: "2" },
//     { text: "Large", value: "3" },
//     { text: "X-Large", value: "4" },
//     { text: "2X-Large", value: "5" },
//   ];

//   mounted(ev: any) {
//     this.dropDown = (
//       this.$refs.dropDownList as DropDownList
//     ).kendoWidget() as kendo.ui.DropDownList;

//     window.console.log(this.dropDown);
//   }
// }

// import Vue from "vue";
// import { defineComponent, ref } from "vue";
// private dropDown!: kendo.ui.DropDownList;

// export default defineComponent({
//   name: "HelloWorld",
//   props: {
//     msg: {
//       type: String,
//       default: null,
//     },
//   },
//   setup() {
//     const hello = ref("hi");
//     // const object = reactive({ foo: "bar" });
//     const dataSourceArray: Record<object> = [
//       { text: "Small", value: "1" },
//       { text: "Medium", value: "2" },
//       { text: "Large", value: "3" },
//       { text: "X-Large", value: "4" },
//       { text: "2X-Large", value: "5" },
//     ];

//     return {
//       hello,
//       dataSourceArray,
//     };
//   },
// });
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
