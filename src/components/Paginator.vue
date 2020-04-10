<template>
  <nav v-if="paginator.total > 1">
    <ul class="pagination justify-content-end">
      <li class="page-item" v-if="paginator.page > 1">
        <span class="page-link" @click="goPaginate(paginator.page - 1)">
          <i class="fas fa-angle-double-left"></i>
        </span>
      </li>
      <li
        class="page-item"
        :class="{active: page == paginator.page}"
        aria-current="page"
        v-for="page in paginator.total"
        :key="page"
      >
        <a class="page-link" @click="goPaginate(page)">
          {{page}}
          <span class="sr-only">(atual)</span>
        </a>
      </li>
      <li class="page-item" v-if="paginator.page < paginator.total">
        <a class="page-link" @click="goPaginate(paginator.page + 1)">
          <i class="fas fa-angle-double-right"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    module: String
  },
  computed: {
    paginator() {
      return this.$store.getters.paginator;
    }
  },
  methods: {
    goPaginate(page) {
      this.$store.dispatch("paginator", { page: page });

      this.$store.dispatch(`get${this.module}`);
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  bottom: 0px;
  position: absolute;
  right: 20px;
}
</style>
