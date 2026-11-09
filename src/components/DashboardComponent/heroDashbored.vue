<!-- <template>
  <section id="heroDashbored" class="hero">
    <div class="container mx-auto px-12 h-100 md:h-screen bg-[#eee]">
      <input class="py-4 px-6 bg-white block" type="text" v-model="name" />
      <textarea class="py-4 px-6 bg-white block" type="text" v-model="des">
      </textarea>
      <button class="block" @click="saveEedit">save</button>
      <button class="block" @click="cansel">cansel</button>
    </div>
  </section>
</template>
<script>
import { landingPage } from "@/stores/main";
import { mapWritableState, mapActions } from "pinia";
// import { mapGetters } from "vuex";
export default {
  name: "heroSection",
  computed: {
    ...mapWritableState(landingPage, ["name", "age", "state", "des"]),
    fullName() {
      console.log(this.localeName);
      return this.localeName;
    },
  },
  methods: {
    ...mapActions(landingPage, ["saveEedit", "cansel"]),
  },
};
</script> -->
<!-- <template>
  <section id="heroDashbored" class="min-h-screen bg-gray-100 py-10">
    <div class="container mx-auto px-6 sm:px-10 lg:px-12">
      <div class="mb-8">
        <h1 class="text-3xl sm:text-4xl font-bold">Edit Hero Section</h1>

        <p class="text-gray-500 mt-2">
          Change the name and description displayed on your landing page.
        </p>
      </div>

      <div class="max-w-3xl bg-white rounded-2xl shadow-md p-6 sm:p-8">
        <div class="mb-6">
          <label for="heroName" class="block font-semibold mb-2"> Name </label>

          <input
            id="heroName"
            type="text"
            v-model="name"
            class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter your name"
          />
        </div>

        <div class="mb-6">
          <label for="heroDescription" class="block font-semibold mb-2">
            Description
          </label>

          <textarea
            id="heroDescription"
            v-model="des"
            rows="6"
            class="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter your description"
          ></textarea>
        </div>

        <div class="flex flex-wrap gap-3">
          <button
            @click="saveEedit"
            class="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition"
          >
            Save
          </button>

          <button
            @click="cansel"
            class="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      </div>

      <div class="max-w-3xl mt-8 bg-white rounded-2xl shadow-md p-6 sm:p-8">
        <h2 class="text-xl font-bold mb-4">Current Preview</h2>

        <div class="bg-gray-50 rounded-xl p-5">
          <h3 class="text-2xl font-bold">
            Welcome,
            <span class="text-blue-500">
              {{ localeName || "User" }}
            </span>
          </h3>

          <p class="text-gray-600 mt-3">
            {{ localdes || "No description yet." }}
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
  name: "heroDashbored",

  computed: {
    ...mapWritableState(landingPage, [
      "name",
      "age",
      "state",
      "des",
      "localeName",
      "localdes",
    ]),
  },

  methods: {
    ...mapActions(landingPage, ["saveEedit", "cansel"]),
  },
};
</script> -->
<template>
  <section
    id="heroDashbored"
    class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-100 py-10"
  >
    <div class="container mx-auto px-6 sm:px-10 lg:px-12">
      <!-- العنوان -->
      <div class="mb-8 flex items-center gap-3 justify-center">
        <span
          class="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200"
          >✏️</span
        >
        <div>
          <h1 class="text-3xl sm:text-4xl font-bold text-slate-800">
            Edit Hero Section
          </h1>
          <p class="text-gray-500 mt-1">
            Change the name and description displayed on your landing page.
          </p>
        </div>
      </div>

      <!-- Card -->
      <div
        class="max-w-3xl bg-white rounded-2xl shadow-md border border-blue-100 p-6 sm:p-8 mx-auto"
      >
        <!-- Name -->
        <div class="mb-6">
          <label
            for="heroName"
            class="block text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2"
          >
            Name
          </label>
          <input
            id="heroName"
            type="text"
            v-model="name"
            class="w-full border border-blue-100 bg-blue-50/50 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
            placeholder="Enter your name"
          />
        </div>

        <!-- Description -->
        <div class="mb-6">
          <label
            for="heroDescription"
            class="block text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2"
          >
            Description
          </label>
          <textarea
            id="heroDescription"
            v-model="des"
            rows="6"
            class="w-full border border-blue-100 bg-blue-50/50 rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
            placeholder="Enter your description"
          ></textarea>
        </div>

        <!-- Buttons -->
        <div class="flex flex-wrap gap-3">
          <button
            @click="saveEedit"
            class="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl shadow-md shadow-emerald-200 hover:bg-emerald-600 hover:-translate-y-0.5 transition-all duration-300"
          >
            Save
          </button>
          <button
            @click="cansel"
            class="px-6 py-3 bg-white text-slate-500 border border-slate-200 rounded-xl hover:bg-slate-100 transition"
          >
            Cancel
          </button>
          <router-link
            to="/"
            class="px-6 py-3 bg-white text-blue-600 font-semibold border border-blue-200 rounded-xl hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300"
            >cheek hero</router-link
          >
        </div>
      </div>

      <!-- Preview -->
      <div
        class="max-w-3xl mt-8 bg-white rounded-2xl shadow-md border border-blue-100 p-6 sm:p-8 mx-auto"
      >
        <h2
          class="text-xl font-bold mb-4 text-slate-800 flex items-center gap-2"
        >
          <span class="w-2 h-6 bg-blue-500 rounded-full"></span>
          Current Preview
        </h2>
        <div
          class="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-5 border border-blue-100"
        >
          <h3 class="text-2xl font-bold text-slate-800">
            Welcome,
            <span class="text-blue-500">{{ localeName || "User" }}</span>
          </h3>
          <p class="text-gray-600 mt-3 leading-relaxed">
            {{ localdes || "No description yet." }}
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
  name: "heroDashbored",

  computed: {
    ...mapWritableState(landingPage, [
      "name",
      "age",
      "state",
      "des",
      "localeName",
      "localdes",
    ]),
  },

  methods: {
    ...mapActions(landingPage, ["saveEedit", "cansel"]),
  },
};
</script>
