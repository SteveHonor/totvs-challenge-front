<template>
  <div>
    <ol class="breadcrumb my-3 p-0">
      <li class="breadcrumb-item">
        <router-link :to="{path: '/dashboard'}">
          <i class="fas fa-home"></i>
        </router-link>
      </li>
      <li v-for="(i, crumb) in breadcrumbs" class="breadcrumb-item" :key='crumb'>
        <router-link  :to="{path: '/' + i}"> {{ i }}</router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  computed: {
    breadcrumbs: function () {
      var crumbs = []
      for (var i = 0; i < this.$route.matched.length; i++) {
        if (this.$route.matched[i].name) {
          crumbs.push(this.$route.matched[i].name)
        }
      }
      return crumbs
    }
  }
}
</script>

<style lang="scss" scoped>
  .breadcrumb {
    background-color: transparent;
    padding: 0 0 0 10px;
    margin: 0;

    li:first-child {
      i {
        margin-top: 3px;
        font-size: 18px;
      }
    }

    li:last-child {
      font-weight: bold;
    }
    .breadcrumb-title {
      text-transform: capitalize;
    }
    .breadcrumb-item {
      font-size: 15px;

      & a {
        text-decoration: none;
        text-transform: none;
      }

      & + .breadcrumb-item::before {
        font-size: larger;
        display: inline-block;
        padding: 0 0.5rem;
        color: #b56969;
        content: "|";
      }

    }

  }

</style>
