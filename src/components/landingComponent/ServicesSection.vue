<!-- <template>
  <section id="ServicesSection" class="services bg-[#EEE]">
    <div class="container mx-auto px-12 sm:py-20 py-10">
      <h2 class="text-4xl font-bold mb-8">Our Services</h2>
      <div
        v-if="servicesState === true"
        class="flex gap-3 justify-center align-center flex-wrap"
      >
        <div
          v-for="(localservice, index) in localservices"
          :key="localservice.id"
          class="h-100"
        >
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="title mb-4 flex items-center gap-2">
              {{ index + 1 }} \
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

              <h3 class="text-xl font-bold">{{ localservice.name }}</h3>
            </div>
            <p class="text-gray-600">{{ localservice.des }}</p>
            <img
              :src="localservice.link"
              alt="hero"
              class="object-cover mt-4 rounded-3xl h-100 w-100"
            />
          </div>
        </div>
      </div>
      <div v-else class="flex gap-3 justify-center align-center">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          class="h-100"
        >
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="title mb-4 flex items-center gap-2">
              {{ index + 1 }} \
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

              <h3 class="text-xl font-bold">{{ service.name }}</h3>
            </div>
            <p class="text-gray-600">{{ service.des }}</p>
            <img
              :src="service.link"
              alt="hero"
              class="object-cover mt-4 rounded-3xl h-100 w-100"
            />
          </div>
        </div>
      </div>
    </div>
    <P class="p-20">{{ servicesState }}</P>
  </section>
</template>
<script>
import { landingPage } from "@/stores/main";
import { mapState } from "pinia";
export default {
  name: "ServicesSection",
  computed: {
    ...mapState(landingPage, ["services", "localservices", "servicesState"]),
  },
  methods: {
    // ...mapActions(landingPage, ["servicesState"]),
  },
};
</script> -->
<!-- <template>
  <section id="ServicesSection" class="services bg-[#EEE]">
    <div class="container mx-auto px-6 sm:px-12 py-10 sm:py-20">
      <h2 class="text-4xl font-bold mb-8 text-center md:text-left">
        Our Services
      </h2>

      <div
        v-if="servicesState === true"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div
          v-for="(localservice, index) in localservices"
          :key="localservice.id"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            :src="localservice.link"
            :alt="localservice.name"
            class="w-full h-56 object-cover"
          />

          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <span class="font-bold text-blue-500">
                {{ index + 1 }}
              </span>

              <h3 class="text-xl font-bold">
                {{ localservice.name }}
              </h3>
            </div>

            <p class="text-gray-600">
              {{ localservice.des }}
            </p>
          </div>
        </div>
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            :src="service.link"
            :alt="service.name"
            class="w-full h-56 object-cover"
          />

          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <span class="font-bold text-blue-500">
                {{ index + 1 }}
              </span>

              <h3 class="text-xl font-bold">
                {{ service.name }}
              </h3>
            </div>

            <p class="text-gray-600">
              {{ service.des }}
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
  name: "ServicesSection",

  computed: {
    ...mapState(landingPage, ["services", "localservices", "servicesState"]),
  },
};
</script> -->
<template>
  <section
    id="ServicesSection"
    class="services bg-gradient-to-b from-blue-50/60 to-white"
  >
    <div class="container mx-auto px-6 sm:px-12 py-10 sm:py-20">
      <div class="text-center md:text-left mb-10">
        <p class="text-blue-500 font-semibold mb-2">✦ What we offer</p>
        <h2 class="text-4xl font-bold text-slate-800">Our Services</h2>
      </div>

      <!-- البيانات المحفوظة / المعدلة -->
      <div
        v-if="servicesState === true"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div
          v-for="(localservice, index) in localservices"
          :key="localservice.id"
          class="group bg-white rounded-2xl shadow-md overflow-hidden border border-blue-100 hover:shadow-xl hover:shadow-blue-200/50 hover:-translate-y-1 transition-all duration-300"
        >
          <div class="relative overflow-hidden">
            <img
              :src="localservice.link"
              :alt="localservice.name"
              class="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span
              class="absolute top-3 left-3 px-3 py-1 bg-blue-600/90 text-white text-xs font-bold rounded-full"
            >
              {{ index + 1 }}
            </span>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">
              {{ localservice.name }}
            </h3>
            <p class="text-gray-600 leading-relaxed">{{ localservice.des }}</p>
          </div>
        </div>
      </div>

      <!-- البيانات الأصلية -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          class="group bg-white rounded-2xl shadow-md overflow-hidden border border-blue-100 hover:shadow-xl hover:shadow-blue-200/50 hover:-translate-y-1 transition-all duration-300"
        >
          <div class="relative overflow-hidden">
            <img
              :src="service.link"
              :alt="service.name"
              class="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span
              class="absolute top-3 left-3 px-3 py-1 bg-blue-600/90 text-white text-xs font-bold rounded-full"
            >
              {{ index + 1 }}
            </span>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-800 mb-2">
              {{ service.name }}
            </h3>
            <p class="text-gray-600 leading-relaxed">{{ service.des }}</p>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <router-link
          to="/DashboardView/services"
          class="px-6 py-3 bg-white text-blue-600 font-semibold border border-blue-200 rounded-xl hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300"
          >edit service</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import { landingPage } from "@/stores/main";
import { mapState } from "pinia";

export default {
  name: "ServicesSection",

  computed: {
    ...mapState(landingPage, ["services", "localservices", "servicesState"]),
  },
};
</script>
