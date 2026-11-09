<!-- <template>
  <section id="heroSection" class="hero">
    <div
      class="container mx-auto px-12 flex flex-col md:flex-row justify-center items-center sm:gap-5 md:gap-10 h-100 md:h-screen"
    >
      <div class="w-[ 100% ] md:w-[ 50% ] text-center md:text-left">
        <h1 class="text-4xl md:text-2xl lg:text-4xl font-bold mb-5">
          Welcome,
          <span v-if="state === true" class="text-blue-400">{{
            localeName
          }}</span>
          <span v-else class="text-blue-400">usre</span>
        </h1>
        <p v-if="state === true" class="text-md">{{ localdes }}</p>
        <p v-else class="text-md">
          Here Iam gonna share everything about my life. Books Iam reading,
          Games Iam Playing, Stories and Events
        </p> -->
<!-- <button @click="saveEedit">Get start</button> -->
<!-- </div> -->
<!-- <div class="w-[ 100% ] md:w-[ 50% ] md:h-full"> -->
<!-- <img
          src="https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/teaser_720x406x2/dam/US-local/Press-Releases/2025/7-JULY/70th-anniversary-club-coupe/2025.05.11_PCA-70th-Vehicle_L1040987.jpg/jcr:content/2025.05.11_PCA%2070th%20Vehicle_L1040987.jpg"
          alt="hero"
          class="md:h-full md:object-cover h-[ 0rem ] hidden md:block"
        />
      </div>
    </div>
  </section>
</template>
<script>
import { landingPage } from "@/stores/main";
import { mapState, mapActions } from "pinia";
export default {
  name: "heroSection",
  computed: {
    ...mapState(landingPage, ["state", "localeName", "localdes"]),
  },
  methods: {
    ...mapActions(landingPage, ["saveEedit", "cansel"]),
  },
};
</script> -->
<!-- <template>
  <section id="heroSection" class="min-h-screen bg-gray-50 flex items-center">
    <div class="container mx-auto px-6 sm:px-10 lg:px-12 py-16 lg:py-20">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
      >
        <div class="text-center lg:text-left">
          <p class="text-blue-500 font-semibold mb-3">Welcome to my website</p>

          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Welcome,
            <span v-if="state === true" class="text-blue-500">
              {{ localeName }}
            </span>

            <span v-else class="text-blue-500"> User </span>
          </h1>

          <p
            v-if="state === true"
            class="text-gray-600 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0"
          >
            {{ localdes }}
          </p>

          <p
            v-else
            class="text-gray-600 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0"
          >
            Here I am gonna share everything about my life. Books I am reading,
            games I am playing, stories and events.
          </p>

          <div
            class="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <a
              href="#ServicesSection"
              class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              My Services
            </a>

            <a
              href="#PortfolioSection"
              class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-white transition"
            >
              My Portfolio
            </a>
          </div>
        </div>
        <div class="w-full">
          <div class="relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src="https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/teaser_720x406x2/dam/US-local/Press-Releases/2025/7-JULY/70th-anniversary-club-coupe/2025.05.11_PCA-70th-Vehicle_L1040987.jpg/jcr:content/2025.05.11_PCA%2070th%20Vehicle_L1040987.jpg"
              alt="Hero"
              class="w-full h-[350px] sm:h-[450px] lg:h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { landingPage } from "@/stores/main";
import { mapState } from "pinia";

export default {
  name: "heroSection",

  computed: {
    ...mapState(landingPage, ["state", "localeName", "localdes"]),
  },
};
</script> -->
<template>
  <section
    id="heroSection"
    class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-100 flex items-center"
  >
    <div class="container mx-auto px-6 sm:px-10 lg:px-12 py-16 lg:py-20">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
      >
        <!-- النص -->
        <div class="text-center lg:text-left">
          <p
            class="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-4"
          >
            ✦ Welcome to my website
          </p>

          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-800"
          >
            Welcome,
            <span v-if="state === true" class="text-blue-500">
              {{ localeName }}
            </span>
            <span v-else class="text-blue-500">User</span>
          </h1>

          <p
            v-if="state === true"
            class="text-gray-600 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0"
          >
            {{ localdes }}
          </p>

          <p
            v-else
            class="text-gray-600 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0"
          >
            Here I am gonna share everything about my life. Books I am reading,
            games I am playing, stories and events.
          </p>

          <div
            class="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <a
              href="#ServicesSection"
              class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-300"
            >
              My Services
            </a>

            <a
              href="#PortfolioSection"
              class="px-6 py-3 bg-white text-blue-600 font-semibold border border-blue-200 rounded-xl hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300"
            >
              My Portfolio
            </a>
            <router-link
              to="/DashboardView/hero"
              class="px-6 py-3 bg-white text-blue-600 font-semibold border border-blue-200 rounded-xl hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300"
              >cheek hero</router-link
            >
            <router-link
              to="/DashboardView/hero"
              class="px-6 py-3 bg-white text-blue-600 font-semibold border border-blue-200 rounded-xl hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300"
              >login</router-link
            >
          </div>
        </div>

        <!-- الصورة -->
        <div class="w-full">
          <div
            class="relative overflow-hidden rounded-3xl shadow-2xl shadow-blue-200/60 ring-4 ring-white"
          >
            <img
              src="https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/teaser_720x406x2/dam/US-local/Press-Releases/2025/7-JULY/70th-anniversary-club-coupe/2025.05.11_PCA-70th-Vehicle_L1040987.jpg/jcr:content/2025.05.11_PCA%2070th%20Vehicle_L1040987.jpg"
              alt="Hero"
              class="w-full h-[350px] sm:h-[450px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { landingPage } from "@/stores/main";
import { mapState } from "pinia";

export default {
  name: "heroSection",

  computed: {
    ...mapState(landingPage, ["state", "localeName", "localdes"]),
  },
};
</script>
