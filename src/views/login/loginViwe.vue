<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-100 px-4">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-slate-800">Welcome Back</h1>

        <p class="text-slate-500 mt-2">Sign in to manage your website</p>
      </div>

      <form class="space-y-5">
        <div>
          <label class="block text-sm font-semibold text-slate-700 mb-2">
            Email Address
          </label>

          <input
            v-model="email"
            type="email"
            placeholder="admin@gmail.com"
            required
            class="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>

        <div>
          <label class="block text-sm font-semibold text-slate-700 mb-2">
            Password
          </label>

          <input
            v-model="password"
            type="password"
            placeholder="Enter your password"
            required
            class="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>

        <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>

        <button
          @click.prevent="login"
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
        >
          Sign In
        </button>
      </form>

      <p class="text-center text-xs text-slate-400 mt-8">
        Dashboard Management System
      </p>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
// import { useRouter } from "vue-router";
// import { useAuthStore } from "@/stores/auth";

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    login() {
      const adminEmail = "admin@gmail.com";
      const adminPassword = "12345";
      if (this.email === adminEmail && this.password === adminPassword) {
        const token = crypto.randomUUID();
        const expiresAt = Date.now() + 24 * 60 * 60 * 1000;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("expiresAt", expiresAt);
        this.$router.push("/DashboardView");
      } else {
        this.error = "Invalid email or password";
      }
    },
  },
};
</script>
