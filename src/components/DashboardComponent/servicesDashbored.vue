<!-- <template>
  <section id="servicesDashbored" class="services bg-[#EEE]">
    <div
      class="px-5 py-10"
      v-for="localservice in localservices"
      :key="localservice.id"
    >
      <label>title servieses</label>
      <input
        v-model="localservice.name"
        @input="startEditServices"
        class="py-10 px-2 mx-2 bg-amber-50"
      />
      <label>descripion</label>
      <input
        v-model="localservice.des"
        @input="startEditServices"
        class="py-10 px-2 mx-2 bg-amber-50"
      />
      <label>img</label>
      <input
        v-model="localservice.link"
        @input="startEditServices"
        class="py-10 px-2 mx-2 bg-amber-50"
      />
      <button class="p-20" @click="deleteService(localservice.id)">
        delet
      </button>
    </div>
    <button
      class="block mx-auto mb-4 p-2 bg-emerald-100"
      @click="saveEeditServicses"
    >
      save
    </button>
    <button class="p-20" @click="addservice()">ADD servre</button>
    <button
      class="block mx-auto p-2 bg-emerald-100"
      @click="canselEeditServicses"
    >
      cansel
    </button>
  </section>
</template>
<script>
import { landingPage } from "@/stores/main";
import { mapWritableState, mapActions } from "pinia";
export default {
  name: "servicesDashbored",
  computed: {
    ...mapWritableState(landingPage, ["localservices"]),
  },
  methods: {
    ...mapActions(landingPage, [
      "saveEeditServicses",
      "canselEeditServicses",
      "deleteService",
      "addservice",
      "startEditServices",
    ]),
  },
};
</script> -->
<!-- <template>
  <section id="servicesDashbored" class="py-6">
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      @focusin="startEditServices"
    >
      <div
        v-for="localservice in localservices"
        :key="localservice.id"
        class="bg-white p-6 rounded-xl shadow-md"
      >
        <label class="block mb-2">Title services</label>

        <input
          v-model="localservice.name"
          class="w-full py-3 px-3 mb-4 bg-amber-50 rounded"
        />

        <label class="block mb-2">Description</label>

        <input
          v-model="localservice.des"
          class="w-full py-3 px-3 mb-4 bg-amber-50 rounded"
        />

        <label class="block mb-2">Image</label>

        <input
          v-model="localservice.link"
          class="w-full py-3 px-3 mb-4 bg-amber-50 rounded"
        />

        <button
          class="px-4 py-2 bg-red-100 rounded"
          @click="deleteService(localservice.id)"
        >
          Delete
        </button>
      </div>
    </div>

    <div class="flex flex-wrap gap-3 mt-6">
      <button class="px-5 py-3 bg-blue-100 rounded" @click="addservice">
        Add service
      </button>

      <button
        class="px-5 py-3 bg-emerald-100 rounded"
        @click="saveEeditServicses"
      >
        Save
      </button>

      <button
        class="px-5 py-3 bg-gray-200 rounded"
        @click="canselEeditServicses"
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
  name: "servicesDashbored",

  computed: {
    ...mapWritableState(landingPage, ["localservices"]),
  },

  methods: {
    ...mapActions(landingPage, [
      "saveEeditServicses",
      "canselEeditServicses",
      "deleteService",
      "addservice",
      "startEditServices",
    ]),
  },
};
</script> -->
<template>
  <section
    id="servicesDashbored"
    class="py-8 bg-gradient-to-br from-blue-50/50 to-white min-h-screen"
  >
    <div class="container mx-auto px-6">
      <div class="mb-8 flex items-center gap-3 justify-center">
        <span
          class="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200"
          >🛠️</span
        >
        <div>
          <h1 class="text-3xl font-bold text-slate-800">Edit Services</h1>
          <p class="text-gray-500 mt-1">Manage your services cards.</p>
        </div>
      </div>
    </div>

    <div
      class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      @focusin="startEditServices"
    >
      <div
        v-for="localservice in localservices"
        :key="localservice.id"
        class="group bg-white rounded-2xl shadow-md overflow-hidden border border-blue-100 hover:shadow-xl hover:shadow-blue-200/50 hover:-translate-y-1 transition-all duration-300"
      >
        <div class="relative overflow-hidden">
          <img
            :src="localservice.link"
            :alt="localservice.name"
            class="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div class="p-5 space-y-3">
          <div>
            <label
              class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600"
            >
              Title
            </label>
            <input
              v-model="localservice.name"
              class="w-full px-3 py-2 bg-blue-50/60 border border-blue-100 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
            />
          </div>

          <div>
            <label
              class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600"
            >
              Description
            </label>
            <textarea
              v-model="localservice.des"
              rows="2"
              class="w-full px-3 py-2 bg-blue-50/60 border border-blue-100 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition resize-none"
            ></textarea>
          </div>

          <div>
            <label
              class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600"
            >
              Image
            </label>
            <input
              v-model="localservice.link"
              class="w-full px-3 py-2 bg-blue-50/60 border border-blue-100 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
            />
          </div>

          <button
            class="w-full px-4 py-2.5 bg-rose-50 text-rose-500 border border-rose-100 rounded-lg font-medium hover:bg-rose-500 hover:text-white transition-all duration-300"
            @click="deleteService(localservice.id)"
          >
            🗑 Delete
          </button>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-6">
      <div
        class="flex flex-wrap gap-3 mt-8 p-4 bg-gradient-to-l from-blue-50 to-sky-50 rounded-2xl border border-blue-100"
      >
        <button
          class="px-5 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300"
          @click="addservice"
        >
          ＋ Add Service
        </button>

        <button
          class="px-5 py-3 bg-emerald-500 text-white font-semibold rounded-xl shadow-md shadow-emerald-200 hover:bg-emerald-600 hover:-translate-y-0.5 transition-all duration-300"
          @click="saveEeditServicses"
        >
          ✓ Save
        </button>

        <button
          class="px-5 py-3 bg-white text-slate-500 border border-slate-200 rounded-xl hover:bg-slate-100 transition"
          @click="canselEeditServicses"
        >
          Cancel
        </button>
        <router-link
          to="/#ServicesSection"
          class="px-6 py-3 bg-white text-blue-600 font-semibold border border-blue-200 rounded-xl hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300"
          >cheek service</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import { landingPage } from "@/stores/main";
import { mapWritableState, mapActions } from "pinia";

export default {
  name: "servicesDashbored",

  computed: {
    ...mapWritableState(landingPage, ["localservices"]),
  },

  methods: {
    ...mapActions(landingPage, [
      "saveEeditServicses",
      "canselEeditServicses",
      "deleteService",
      "addservice",
      "startEditServices",
    ]),
  },
};
</script>
