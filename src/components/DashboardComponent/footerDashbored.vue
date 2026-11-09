<!-- <template>
  <section id="footerDashbored" class="bg-gray-100 py-10">
    <div class="container mx-auto px-6 sm:px-10 lg:px-12">
      <div class="mb-8">
        <h2 class="text-3xl font-bold">Edit Footer</h2>

        <p class="text-gray-500 mt-2">
          Edit the information displayed in the footer.
        </p>
      </div>

      <div class="max-w-3xl bg-white rounded-2xl shadow-md p-6 sm:p-8">
        <div class="mb-6">
          <label class="block font-semibold mb-2"> Footer Title </label>

          <input
            v-model="localFooter.title"
            type="text"
            class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Footer title"
          />
        </div>

        <div class="mb-6">
          <label class="block font-semibold mb-2"> Description </label>

          <textarea
            v-model="localFooter.description"
            rows="4"
            class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-400"
            placeholder="Footer description"
          ></textarea>
        </div>

        <div class="mb-6">
          <label class="block font-semibold mb-2"> Copyright </label>

          <input
            v-model="localFooter.copyright"
            type="text"
            class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Copyright"
          />
        </div>

        <div class="flex gap-3">
          <button
            @click="saveEditFooter"
            class="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition"
          >
            Save
          </button>

          <button
            @click="cancelEditFooter"
            class="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { landingPage } from "@/stores/main";
import { mapWritableState, mapActions } from "pinia";

export default {
  name: "footerDashbored",

  computed: {
    ...mapWritableState(landingPage, ["localFooter"]),
  },

  methods: {
    ...mapActions(landingPage, [
      "saveEditFooter",
      "cancelEditFooter",
      "startEditFooter",
    ]),
  },

  mounted() {
    this.startEditFooter();
  },
};
</script> -->
<template>
  <section
    id="footerDashbored"
    class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-100 py-10"
  >
    <div class="container mx-auto px-6 sm:px-10 lg:px-12">
      <div class="mb-8 flex items-center gap-3 justify-center">
        <span
          class="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200"
          >📄</span
        >
        <div>
          <h2 class="text-3xl font-bold text-slate-800">Edit Footer</h2>
          <p class="text-gray-500 mt-1">
            Edit the information displayed in the footer.
          </p>
        </div>
      </div>

      <div
        class="max-w-3xl bg-white rounded-2xl shadow-md border border-blue-100 p-6 sm:p-8 space-y-5 mx-auto"
      >
        <div>
          <label
            class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600"
          >
            Footer Title
          </label>
          <input
            v-model="localFooter.title"
            type="text"
            class="w-full px-4 py-3 bg-blue-50/60 border border-blue-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
            placeholder="Footer title"
          />
        </div>

        <div>
          <label
            class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600"
          >
            Description
          </label>
          <textarea
            v-model="localFooter.description"
            rows="4"
            class="w-full px-4 py-3 bg-blue-50/60 border border-blue-100 rounded-xl outline-none resize-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
            placeholder="Footer description"
          ></textarea>
        </div>

        <div>
          <label
            class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600"
          >
            Copyright
          </label>
          <input
            v-model="localFooter.copyright"
            type="text"
            class="w-full px-4 py-3 bg-blue-50/60 border border-blue-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
            placeholder="Copyright"
          />
        </div>

        <div class="flex flex-wrap gap-3 pt-2">
          <button
            @click="saveEditFooter"
            class="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl shadow-md shadow-emerald-200 hover:bg-emerald-600 hover:-translate-y-0.5 transition-all duration-300"
          >
            ✓ Save
          </button>

          <button
            @click="cancelEditFooter"
            class="px-6 py-3 bg-white text-slate-500 border border-slate-200 rounded-xl hover:bg-slate-100 transition"
          >
            Cancel
          </button>
          <router-link
            to="/#footerLanding"
            class="px-6 py-3 bg-white text-blue-600 font-semibold border border-blue-200 rounded-xl hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300"
            >cheek footer</router-link
          >
        </div>
      </div>

      <!-- معاينة الفوتر -->
      <div class="max-w-3xl mt-8 mx-auto">
        <div class="bg-slate-800 rounded-2xl shadow-md p-6 sm:p-8 text-white">
          <h3 class="text-xl font-bold">
            {{ localFooter.title || "Footer Title" }}
          </h3>
          <p class="text-gray-400 mt-2 leading-relaxed">
            {{ localFooter.description || "Footer description..." }}
          </p>
          <p class="text-gray-500 text-sm mt-4 border-t border-slate-700 pt-4">
            {{ localFooter.copyright || "© 2026" }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { landingPage } from "@/stores/main";
import { mapWritableState, mapActions } from "pinia";

export default {
  name: "footerDashbored",

  computed: {
    ...mapWritableState(landingPage, ["localFooter"]),
  },

  methods: {
    ...mapActions(landingPage, [
      "saveEditFooter",
      "cancelEditFooter",
      "startEditFooter",
    ]),
  },

  mounted() {
    this.startEditFooter();
  },
};
</script>
