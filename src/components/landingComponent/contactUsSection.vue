<!-- <template>
  <section id="contactUsSection" class="contactUsSection bg-[#EEE]">
    <div class="container mx-auto px-12 sm:py-20 py-10">
      <h2 class="text-4xl font-bold mb-8">Contact Us</h2>
      <div class="form">
        <form class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex flex-col">
            <label for="name" class="mb-2 font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="border border-gray-300 rounded-lg p-2 bg-white"
            />
          </div>
          <div class="flex flex-col">
            <label for="email" class="mb-2 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="border border-gray-300 rounded-lg p-2 bg-white"
            />
          </div>
          <div class="flex flex-col md:col-span-2">
            <label for="message" class="mb-2 font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              class="border border-gray-300 rounded-lg p-2 bg-white"
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 md:col-span-2"
          >
            Send Message
          </button>
        </form>
      </div>
      <div class="myEmail">
        <p class="text-gray-600 mt-4">
          Email:
          <a
            href="mailto:example@example.com"
            class="text-blue-500 hover:underline"
            >example@example.com</a
          >
        </p>
        <p class="text-gray-600">
          Phone:
          <a href="tel:+1234567890" class="text-blue-500 hover:underline"
            >+1 (234) 567-890</a
          >
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "contactUsSection",
};
</script> -->
<!-- <template>
  <section id="contactUsSection" class="contactUsSection bg-[#EEE]">
    <div class="container mx-auto px-6 sm:px-12 py-10 sm:py-20">
      <h2 class="text-4xl font-bold mb-8">Contact Us</h2>

      <div v-if="contactState">
        <form class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex flex-col">
            <label class="mb-2 font-semibold"> Name </label>

            <input class="border border-gray-300 rounded-lg p-2 bg-white" />
          </div>

          <div class="flex flex-col">
            <label class="mb-2 font-semibold"> Email </label>

            <input
              type="email"
              class="border border-gray-300 rounded-lg p-2 bg-white"
            />
          </div>

          <div class="flex flex-col md:col-span-2">
            <label class="mb-2 font-semibold"> Message </label>

            <textarea
              rows="4"
              class="border border-gray-300 rounded-lg p-2 bg-white"
            ></textarea>
          </div>

          <button
            type="submit"
            class="bg-blue-500 text-white py-2 px-4 rounded-lg md:col-span-2"
          >
            Send Message
          </button>
        </form>

        <div class="my-6">
          <p class="text-gray-600">
            Email:
            <a
              :href="`mailto:${contact.email}`"
              class="text-blue-500 hover:underline"
            >
              {{ contact.email }}
            </a>
          </p>

          <p class="text-gray-600">
            Phone:
            <a
              :href="`tel:${contact.phone}`"
              class="text-blue-500 hover:underline"
            >
              {{ contact.phone }}
            </a>
          </p>

          <p class="text-gray-600">
            {{ contact.message }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { landingPage } from "@/stores/main";
import { mapState } from "pinia";

export default {
  name: "contactUsSection",

  computed: {
    ...mapState(landingPage, ["contact", "contactState"]),
  },
};
</script> -->
<template>
  <section
    id="contactUsSection"
    class="bg-gradient-to-b from-blue-50/60 to-white"
  >
    <div class="container mx-auto px-6 sm:px-12 py-10 sm:py-20">
      <div class="text-center md:text-left mb-10">
        <p class="text-blue-500 font-semibold mb-2">✦ Get in touch</p>
        <h2 class="text-4xl font-bold text-slate-800">Contact Us</h2>
      </div>

      <div v-if="contactState">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <!-- النموذج -->
          <div
            class="lg:col-span-3 bg-white rounded-3xl shadow-md border border-blue-100 p-6 sm:p-8"
          >
            <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col">
                <label
                  class="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  class="border border-blue-100 bg-blue-50/50 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
                  placeholder="Your name"
                />
              </div>

              <div class="flex flex-col">
                <label
                  class="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  class="border border-blue-100 bg-blue-50/50 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
                  placeholder="you@example.com"
                />
              </div>

              <div class="flex flex-col md:col-span-2">
                <label
                  class="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600"
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  class="border border-blue-100 bg-blue-50/50 rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                class="md:col-span-2 px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-300"
              >
                ✉️ Send Message
              </button>
            </form>
          </div>

          <!-- معلومات التواصل -->
          <div class="lg:col-span-2 flex flex-col gap-4">
            <div
              class="bg-white rounded-3xl shadow-md border border-blue-100 p-6"
            >
              <p
                class="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2"
              >
                📧 Email
              </p>
              <a
                :href="`mailto:${contact.email}`"
                class="text-slate-700 font-medium hover:text-blue-600 transition break-all"
              >
                {{ contact.email }}
              </a>
            </div>

            <div
              class="bg-white rounded-3xl shadow-md border border-blue-100 p-6"
            >
              <p
                class="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2"
              >
                📞 Phone
              </p>
              <a
                :href="`tel:${contact.phone}`"
                class="text-slate-700 font-medium hover:text-blue-600 transition"
              >
                {{ contact.phone }}
              </a>
            </div>

            <div
              class="bg-gradient-to-br from-blue-600 to-sky-500 rounded-3xl shadow-md p-6 text-white"
            >
              <p
                class="text-xs font-semibold uppercase tracking-wider text-blue-100 mb-2"
              >
                💬 Message
              </p>
              <p class="leading-relaxed">{{ contact.message }}</p>
            </div>
          </div>
          <div class="mt-10">
            <router-link
              to="/DashboardView/contact"
              class="px-6 py-3 bg-white text-blue-600 font-semibold border border-blue-200 rounded-xl hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300"
              >edit contact</router-link
            >
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
  name: "contactUsSection",

  computed: {
    ...mapState(landingPage, ["contact", "contactState"]),
  },
};
</script>
