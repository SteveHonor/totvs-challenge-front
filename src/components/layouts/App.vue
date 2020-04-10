  <template>
  <div id="wrapper">
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Navbar />
        <div class="container">
          <Breadcrumb />
          <slot name="app" />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<style lang="scss">
</style>

<script>
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Breadcrumb from '@/components/layouts/Breadcrumb'

export default {
  components: {
    Navbar,
    Footer,
    Breadcrumb
  }
};
</script>
