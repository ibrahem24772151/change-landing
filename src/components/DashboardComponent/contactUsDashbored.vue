<!-- <template>
  <section id="contactUsDashbored" class="py-6">
    <div class="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <label class="block mb-2">Name</label>

      <input
        v-model="localContact.name"
        class="w-full p-3 bg-amber-50 rounded mb-4"
      />

      <label class="block mb-2">Email</label>

      <input
        v-model="localContact.email"
        class="w-full p-3 bg-amber-50 rounded mb-4"
      />

      <label class="block mb-2">Phone</label>

      <input
        v-model="localContact.phone"
        class="w-full p-3 bg-amber-50 rounded mb-4"
      />

      <label class="block mb-2">Message</label>

      <textarea
        v-model="localContact.message"
        class="w-full p-3 bg-amber-50 rounded mb-4"
        rows="5"
      ></textarea>

      <div class="flex gap-3">
        <button
          class="px-5 py-3 bg-emerald-100 rounded"
          @click="saveEditContact"
        >
          Save
        </button>

        <button
          class="px-5 py-3 bg-gray-200 rounded"
          @click="cancelEditContact"
        >
          Cancel
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { landingPage } from "@/stores/main";
import { mapWritableState, mapActions } from "pinia";

export default {
  name: "contactUsDashbored",

  computed: {
    ...mapWritableState(landingPage, ["localContact"]),
  },

  methods: {
    ...mapActions(landingPage, ["saveEditContact", "cancelEditContact"]),
  },
};
</script> -->
<template>
  <section
    id="contactUsDashbored"
    class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-100 py-10"
  >
    <div class="container mx-auto px-6">
      <div class="mb-8 flex items-center gap-3 justify-center">
        <span
          class="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200"
          >📬</span
        >
        <div>
          <h1 class="text-3xl font-bold text-slate-800">Edit Contact Info</h1>
          <p class="text-gray-500 mt-1">
            Update your contact details shown on the landing page.
          </p>
        </div>
      </div>
    </div>

    <div class="max-w-2xl mx-auto px-6">
      <div
        class="bg-white rounded-2xl shadow-md border border-blue-100 p-6 sm:p-8 space-y-5"
      >
        <div>
          <label
            class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600"
          >
            Name
          </label>
          <input
            v-model="localContact.name"
            class="w-full px-4 py-3 bg-blue-50/60 border border-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
          />
        </div>

        <div>
          <label
            class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600"
          >
            Email
          </label>
          <input
            v-model="localContact.email"
            class="w-full px-4 py-3 bg-blue-50/60 border border-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
          />
        </div>

        <div>
          <label
            class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600"
          >
            Phone
          </label>
          <input
            v-model="localContact.phone"
            class="w-full px-4 py-3 bg-blue-50/60 border border-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
          />
        </div>

        <div>
          <label
            class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600"
          >
            Message
          </label>
          <textarea
            v-model="localContact.message"
            rows="5"
            class="w-full px-4 py-3 bg-blue-50/60 border border-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition resize-none"
          ></textarea>
        </div>

        <div class="flex flex-wrap gap-3 pt-2">
          <button
            class="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl shadow-md shadow-emerald-200 hover:bg-emerald-600 hover:-translate-y-0.5 transition-all duration-300"
            @click="saveEditContact"
          >
            ✓ Save
          </button>

          <button
            class="px-6 py-3 bg-white text-slate-500 border border-slate-200 rounded-xl hover:bg-slate-100 transition"
            @click="cancelEditContact"
          >
            Cancel
          </button>
          <router-link
            to="/#contactUsSection"
            class="px-6 py-3 bg-white text-blue-600 font-semibold border border-blue-200 rounded-xl hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300"
            >cheek contact us</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { landingPage } from "@/stores/main";
import { mapWritableState, mapActions } from "pinia";

export default {
  name: "contactUsDashbored",

  computed: {
    ...mapWritableState(landingPage, ["localContact"]),
  },

  methods: {
    ...mapActions(landingPage, ["saveEditContact", "cancelEditContact"]),
  },
};
</script>
