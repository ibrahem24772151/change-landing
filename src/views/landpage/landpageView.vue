<template>
  <div class="landpageView">
    <navBarlinkes />
    <heroSection />
    <ServicesSection />
    <PortfolioSection />
    <contactUsSection />
    <footerLand />
  </div>
</template>

<script>
// @ is an alias to /src
import heroSection from "@/components/landingComponent/heroSection.vue";
import ServicesSection from "@/components/landingComponent/ServicesSection.vue";
import PortfolioSection from "@/components/landingComponent/PortfolioSection.vue";
import contactUsSection from "@/components/landingComponent/contactUsSection.vue";
import navBarlinkes from "@/components/landingComponent/navBarlinkes.vue";
import footerLand from "@/components/landingComponent/footerLand.vue";
export default {
  name: "landpageView",
  components: {
    heroSection,
    ServicesSection,
    PortfolioSection,
    contactUsSection,
    navBarlinkes,
    footerLand,
  },
};
</script>
