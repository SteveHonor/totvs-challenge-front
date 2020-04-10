<template>
  <div class="input-group">
    <input
      type="text"
      v-model="query"
      placeholder="Digite para Procurar"
      class="input form-control search"
    />
    <div class="input-group-append">
      <button
        type="button"
        class="btn btn btn-light"
        @click="query = ''; search()"
        v-if="query.length"
      >
        <i class="fa fa-eraser"></i>
      </button>
      <button type="button" class="btn btn btn-secondary" @click="search()">
        <i class="fa fa-search"></i> Buscar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    module: String
  },
  data() {
    return {
      query: ""
    };
  },
  methods: {
    search() {
      this.$store.dispatch("paginator", {
        page: 1
      });
      this.$store.dispatch("search", this.query);

      this.$store.dispatch(`get${this.module}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-light {
  border-top: 1px solid #d1d3e2;
  border-bottom: 1px solid #d1d3e2;
}
</style>
