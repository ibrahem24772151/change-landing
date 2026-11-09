<!-- <template>
  <section id="PortfolioSection" class="Portfolio">
    <div class="container mx-auto px-12 sm:py-20 py-10">
      <h2 class="text-4xl font-bold mb-8">Portfolio</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white pt-0 rounded-3xl shadow-md overflow-hidden">
          <img
            src="https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/teaser_720x406x2/dam/US-local/Press-Releases/2025/7-JULY/70th-anniversary-club-coupe/2025.05.11_PCA-70th-Vehicle_L1040987.jpg/jcr:content/2025.05.11_PCA%2070th%20Vehicle_L1040987.jpg"
            alt="hero"
            class="w-[ 100% ] h-[ 100% ] object-cover mb-4"
          />
          <div class="title mb-4 flex items-center gap-2 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-blue-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <h3 class="text-xl font-bold">Portfolio 1</h3>
          </div>
          <p class="text-gray-600 mb-2">Description of portfolio 1.</p>
        </div>
        <div class="bg-white pt-0 rounded-3xl shadow-md overflow-hidden">
          <img
            src="https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/teaser_720x406x2/dam/US-local/Press-Releases/2025/7-JULY/70th-anniversary-club-coupe/2025.05.11_PCA-70th-Vehicle_L1040987.jpg/jcr:content/2025.05.11_PCA%2070th%20Vehicle_L1040987.jpg"
            alt="hero"
            class="w-[ 100% ] h-[ 100% ] object-cover mb-4"
          />
          <div class="title mb-4 flex items-center gap-2 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-blue-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <h3 class="text-xl font-bold">Portfolio 2</h3>
          </div>
          <p class="text-gray-600 mb-2">Description of portfolio 2.</p>
        </div>
        <div class="bg-white pt-0 rounded-3xl shadow-md overflow-hidden">
          <img
            src="https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/teaser_720x406x2/dam/US-local/Press-Releases/2025/7-JULY/70th-anniversary-club-coupe/2025.05.11_PCA-70th-Vehicle_L1040987.jpg/jcr:content/2025.05.11_PCA%2070th%20Vehicle_L1040987.jpg"
            alt="hero"
            class="w-[ 100% ] h-[ 100% ] object-cover mb-4"
          />
          <div class="title mb-4 flex items-center gap-2 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-blue-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <h3 class="text-xl font-bold">Portfolio 3</h3>
          </div>
          <p class="text-gray-600 mb-2">Description of portfolio 3.</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "PortfolioSection",
};
</script> -->
<!-- <template>
  <section id="PortfolioSection" class="Portfolio bg-gray-50">
    <div class="container mx-auto px-6 sm:px-12 py-10 sm:py-20">
      <h2 class="text-4xl font-bold mb-8 text-center md:text-left">
        Portfolio
      </h2>

      <div
        v-if="portfolioState === true"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          v-for="(item, index) in localportfolio"
          :key="item.id"
          class="bg-white rounded-3xl shadow-md overflow-hidden"
        >
          <img
            :src="item.link"
            :alt="item.name"
            class="w-full h-64 object-cover"
          />

          <div class="p-6">
            <div class="flex items-center gap-2 justify-center mb-4">
              <span class="text-blue-500 font-bold">
                {{ index + 1 }}
              </span>

              <h3 class="text-xl font-bold">
                {{ item.name }}
              </h3>
            </div>

            <p class="text-gray-600">
              {{ item.des }}
            </p>
          </div>
        </div>
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in portfolio"
          :key="item.id"
          class="bg-white rounded-3xl shadow-md overflow-hidden"
        >
          <img
            :src="item.link"
            :alt="item.name"
            class="w-full h-64 object-cover"
          />

          <div class="p-6">
            <div class="flex items-center gap-2 justify-center mb-4">
              <span class="text-blue-500 font-bold">
                {{ index + 1 }}
              </span>

              <h3 class="text-xl font-bold">
                {{ item.name }}
              </h3>
            </div>

            <p class="text-gray-600">
              {{ item.des }}
            </p>
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
  name: "PortfolioSection",

  computed: {
    ...mapState(landingPage, ["portfolio", "localportfolio", "portfolioState"]),
  },
};
</script> -->
<template>
  <section
    id="PortfolioSection"
    class="Portfolio bg-gradient-to-b from-blue-50/60 to-white"
  >
    <div class="container mx-auto px-6 sm:px-12 py-10 sm:py-20">
      <div class="text-center md:text-left mb-10">
        <p class="text-blue-500 font-semibold mb-2">✦ My work</p>
        <h2 class="text-4xl font-bold text-slate-800">Portfolio</h2>
      </div>

      <!-- البيانات المحفوظة / المعدلة -->
      <div
        v-if="portfolioState === true"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          v-for="(item, index) in localportfolio"
          :key="item.id"
          class="group bg-white rounded-3xl shadow-md overflow-hidden border border-blue-100 hover:shadow-xl hover:shadow-blue-200/50 hover:-translate-y-1 transition-all duration-300"
        >
          <div class="relative overflow-hidden">
            <img
              :src="item.link"
              :alt="item.name"
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span
              class="absolute top-3 left-3 px-3 py-1 bg-blue-600/90 text-white text-xs font-bold rounded-full"
            >
              {{ index + 1 }}
            </span>
            <div
              class="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">
              {{ item.name }}
            </h3>
            <p class="text-gray-600 leading-relaxed">{{ item.des }}</p>
          </div>
        </div>
      </div>

      <!-- البيانات الأصلية -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in portfolio"
          :key="item.id"
          class="group bg-white rounded-3xl shadow-md overflow-hidden border border-blue-100 hover:shadow-xl hover:shadow-blue-200/50 hover:-translate-y-1 transition-all duration-300"
        >
          <div class="relative overflow-hidden">
            <img
              :src="item.link"
              :alt="item.name"
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span
              class="absolute top-3 left-3 px-3 py-1 bg-blue-600/90 text-white text-xs font-bold rounded-full"
            >
              {{ index + 1 }}
            </span>
            <div
              class="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">
              {{ item.name }}
            </h3>
            <p class="text-gray-600 leading-relaxed">{{ item.des }}</p>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <router-link
          to="/DashboardView/portfolio"
          class="px-6 py-3 bg-white text-blue-600 font-semibold border border-blue-200 rounded-xl hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300"
          >edit profile</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import { landingPage } from "@/stores/main";
import { mapState } from "pinia";

export default {
  name: "PortfolioSection",

  computed: {
    ...mapState(landingPage, ["portfolio", "localportfolio", "portfolioState"]),
  },
};
</script>
