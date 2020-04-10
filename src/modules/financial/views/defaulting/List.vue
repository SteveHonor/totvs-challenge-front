<template lang="html">
  <div class="financial-account-defaulting-list">
    <div class="row my-5">
      <div class="col-lg-12">
        <h1 class="text-primary">Clientes Inadimplentes</h1>
        <p>Lista de clientes inadimplentes, para pesquisar digite no campo abaixo</p>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-lg-12">
        <Search module="Defaultings" />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="card shadow">
          <div class="card-body min-height">
            <div class="table-responsive" v-if="defaultings.length">
              <table class="table table-striped table-hover mb-5">
                <thead>
                  <tr>
                    <th @click="orderBy('name')">Nome do Cliente</th>
                    <th @click="orderBy('price')">Valor</th>
                    <th @click="orderBy('dueDate')">Desde</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="defaulting in defaultings" class="text-primary" :key="defaulting._id">
                    <td>{{defaulting.name}}</td>
                    <td>{{defaulting.price | currency('R$ ', 2, {decimalSeparator: ',', thousandsSeparator: ',' })}}</td>
                    <td>{{defaulting.dueDate | moment("DD/MM/Y")}}</td>
                  </tr>
                </tbody>
              </table>
              <Paginator module="Defaultings" />
            </div>
            <div class="py-5 text-center" v-else>
              <h2>Nenhuma há Clientes</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search";
import Paginator from "@/components/Paginator";

export default {
  data: () => ({
    product: {}
  }),
  mounted() {
    this.$store.dispatch("getDefaultings");
  },
  computed: {
    defaultings() {
      return this.$store.getters.defaultings
    },
    order() {
      return this.$store.getters.order
    }
  },
  components: {
    Search,
    Paginator
  },
  methods: {
    orderBy(field) {
      this.$store.dispatch("order", field);
      this.$store.dispatch("getDefaultings");
    }
  }
};
</script>
