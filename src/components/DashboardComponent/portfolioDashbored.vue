<!-- <template>
  <section id="portfolioDashbored" class="py-6">
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      @focusin="startEditPortfolio"
    >
      <div
        v-for="item in localportfolio"
        :key="item.id"
        class="bg-white p-6 rounded-xl shadow-md"
      >
        <img
          :src="item.link"
          :alt="item.name"
          class="w-full h-48 object-cover rounded-lg mb-4"
        />

        <label class="block mb-2"> Title </label>

        <input
          v-model="item.name"
          class="w-full p-3 bg-amber-50 rounded mb-4"
        />

        <label class="block mb-2"> Description </label>

        <textarea
          v-model="item.des"
          class="w-full p-3 bg-amber-50 rounded mb-4"
        ></textarea>

        <label class="block mb-2"> Image </label>

        <input
          v-model="item.link"
          class="w-full p-3 bg-amber-50 rounded mb-4"
        />

        <button
          class="px-4 py-2 bg-red-100 rounded"
          @click="deletePortfolio(item.id)"
        >
          Delete
        </button>
      </div>
    </div>

    <div class="flex flex-wrap gap-3 mt-6">
      <button class="px-5 py-3 bg-blue-100 rounded" @click="addPortfolio">
        Add Portfolio
      </button>

      <button
        class="px-5 py-3 bg-emerald-100 rounded"
        @click="saveEditPortfolio"
      >
        Save
      </button>

      <button
        class="px-5 py-3 bg-gray-200 rounded"
        @click="cancelEditPortfolio"
      >
        Cancel
      </button>
    </div>
  </section>
</template>

<script>
import { landingPage } from "@/stores/main";
import { mapWritableState, mapActions } from "pinia";

export default {
  name: "portfolioDashbored",

  computed: {
    ...mapWritableState(landingPage, ["localportfolio"]),
  },

  methods: {
    ...mapActions(landingPage, [
      "startEditPortfolio",
      "saveEditPortfolio",
      "cancelEditPortfolio",
      "addPortfolio",
      "deletePortfolio",
    ]),
  },
};
</script> -->
<template>
  <section id="portfolioDashbored" class="py-8">
    <div class="mb-8 flex items-center gap-3 justify-center">
      <span
        class="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200"
        >🛠️</span
      >
      <div>
        <h1 class="text-3xl font-bold text-slate-800">Edit portfolio</h1>
        <p class="text-gray-500 mt-1">Manage your portfolio cards.</p>
      </div>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      @focusin="startEditPortfolio"
    >
      <div
        v-for="item in localportfolio"
        :key="item.id"
        class="group bg-white rounded-2xl shadow-md overflow-hidden border border-blue-100 hover:shadow-xl hover:shadow-blue-200/50 hover:-translate-y-1 transition-all duration-300"
      >
        <!-- صورة مع تأثير تدرج أزرق -->
        <div class="relative overflow-hidden">
          <img
            :src="item.link"
            :alt="item.name"
            class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </div>

        <div class="p-6 space-y-4">
          <!-- العنوان -->
          <div>
            <label
              class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600"
            >
              ✏️ Title
            </label>
            <input
              v-model="item.name"
              class="w-full px-4 py-2.5 bg-blue-50/60 border border-blue-100 rounded-lg text-slate-700 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white transition"
            />
          </div>

          <!-- الوصف -->
          <div>
            <label
              class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600"
            >
              📝 Description
            </label>
            <textarea
              v-model="item.des"
              rows="3"
              class="w-full px-4 py-2.5 bg-blue-50/60 border border-blue-100 rounded-lg text-slate-700 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white transition resize-none"
            ></textarea>
          </div>

          <!-- الرابط -->
          <div>
            <label
              class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600"
            >
              🖼️ Image
            </label>
            <input
              v-model="item.link"
              class="w-full px-4 py-2.5 bg-blue-50/60 border border-blue-100 rounded-lg text-slate-700 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white transition"
            />
          </div>

          <!-- زر الحذف -->
          <div class="pt-2">
            <button
              class="w-full px-4 py-2.5 bg-rose-50 text-rose-500 border border-rose-100 rounded-lg font-medium hover:bg-rose-500 hover:text-white hover:shadow-lg hover:shadow-rose-200 transition-all duration-300 flex items-center justify-center gap-2"
              @click="deletePortfolio(item.id)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- أزرار التحكم -->
    <div
      class="flex flex-wrap gap-3 mt-8 p-4 bg-gradient-to-l from-blue-50 to-sky-50 rounded-2xl border border-blue-100"
    >
      <button
        class="px-5 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-md shadow-blue-200 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
        @click="addPortfolio"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        Add Portfolio
      </button>

      <button
        class="px-5 py-3 bg-emerald-500 text-white rounded-xl font-semibold shadow-md shadow-emerald-200 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-300 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
        @click="saveEditPortfolio"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        Save
      </button>

      <button
        class="px-5 py-3 bg-white text-slate-500 border border-slate-200 rounded-xl font-semibold hover:bg-slate-100 hover:text-slate-700 hover:-translate-y-0.5 transition-all duration-300"
        @click="cancelEditPortfolio"
      >
        Cancel
      </button>
      <router-link
        to="/#PortfolioSection"
        class="px-6 py-3 bg-white text-blue-600 font-semibold border border-blue-200 rounded-xl hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300"
        >cheek portfolio</router-link
      >
    </div>
  </section>
</template>

<script>
import { landingPage } from "@/stores/main";
import { mapWritableState, mapActions } from "pinia";

export default {
  name: "portfolioDashbored",

  computed: {
    ...mapWritableState(landingPage, ["localportfolio"]),
  },

  methods: {
    ...mapActions(landingPage, [
      "startEditPortfolio",
      "saveEditPortfolio",
      "cancelEditPortfolio",
      "addPortfolio",
      "deletePortfolio",
    ]),
  },
};
</script>
