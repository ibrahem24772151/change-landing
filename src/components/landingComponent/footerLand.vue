<!-- <template>
  <div class="footerLanding bg-[#333] py-5 text-white">
    <P>craet with Ibrahim &copy; 2026</P>
  </div>
</template>
<script>
export default {
  name: "footerLanding",
};
</script> -->
<!-- <template>
  <footer id="footerLanding" class="bg-[#333] text-white">
    <div class="container mx-auto px-6 sm:px-10 lg:px-12 py-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">

        <div class="text-center md:text-left">
          <h2 class="text-2xl font-bold">
            {{ footer.title }}
          </h2>

          <p class="text-gray-400 mt-2">
            {{ footer.description }}
          </p>
        </div>

        <p class="text-gray-400 text-sm">
          {{ footer.copyright }}
        </p>

        <a
          href="#heroSection"
          class="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
        >
          ↑ Top
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import { landingPage } from "@/stores/main";
import { mapState } from "pinia";

export default {
  name: "footerLand",

  computed: {
    ...mapState(landingPage, ["footer"]),
  },
};
</script> -->
<template>
  <footer id="footerLanding" class="bg-slate-800 text-white">
    <div class="container mx-auto px-6 sm:px-10 lg:px-12 py-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="">
          <router-link
            to="/DashboardView/footer"
            class="px-6 py-3 bg-white text-blue-600 font-semibold border border-blue-200 rounded-xl hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300"
            >edit footer</router-link
          >
        </div>
        <div class="text-center md:text-left">
          <h2 class="text-2xl font-bold text-white">{{ footer.title }}</h2>
          <p class="text-gray-400 mt-2 leading-relaxed">
            {{ footer.description }}
          </p>
        </div>

        <p class="text-gray-500 text-sm">
          {{ footer.copyright }}
        </p>

        <a
          href="#heroSection"
          class="w-11 h-11 flex items-center justify-center bg-blue-600 rounded-xl shadow-lg shadow-blue-500/30 hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300"
        >
          ↑
        </a>
      </div>
    </div>
    <div
      class="border-t border-slate-700 py-4 text-center text-gray-500 text-sm"
    >
      Made with 💙
    </div>
  </footer>
</template>

<script>
import { landingPage } from "@/stores/main";
import { mapState } from "pinia";

export default {
  name: "footerLand",

  computed: {
    ...mapState(landingPage, ["footer"]),
  },
};
</script>
