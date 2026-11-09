<!-- <template>
  <div class="DashboardView">
    <heroDashbored />
    <servicesDashbored />
    <portfolioDashbored />
    <contactUsDashbored />
    <FooterDashbored />
  </div>
</template>
<script>
import heroDashbored from "@/components/DashboardComponent/heroDashbored.vue";
import servicesDashbored from "@/components/DashboardComponent/servicesDashbored.vue";
import portfolioDashbored from "@/components/DashboardComponent/portfolioDashbored.vue";
import contactUsDashbored from "@/components/DashboardComponent/contactUsDashbored.vue";
import FooterDashbored from "@/components/DashboardComponent/footerDashbored.vue";
export default {
  name: "DashboardView",
  components: {
    heroDashbored,
    servicesDashbored,
    portfolioDashbored,
    contactUsDashbored,
    FooterDashbored,
  },
};
</script> -->
<template>
  <div
    class="DashboardView min-h-screen flex bg-gradient-to-br from-blue-50 via-white to-sky-100"
  >
    <!-- ===== Sidebar ===== -->
    <aside
      class="w-64 shrink-0 bg-slate-800 text-white p-4 sticky top-0 h-screen flex flex-col"
    >
      <h1 class="text-xl font-bold text-blue-400 mb-6 px-2">⚙️ Dashboard</h1>

      <nav class="space-y-1 flex-1">
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300"
          :class="[
            $route.path === link.to
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
              : 'text-gray-400 hover:bg-slate-700 hover:text-white',
          ]"
        >
          <span>{{ link.icon }}</span>
          <span>{{ link.label }}</span>
        </router-link>
      </nav>

      <div class="pt-4 border-t border-slate-700">
        <router-link
          to="/"
          class="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-slate-700 hover:text-white transition"
        >
          🌐 <span>View Website</span>
        </router-link>
      </div>
      <div class="pt-4 border-t border-slate-700">
        <button
          class="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-slate-700 hover:text-white transition"
          @click="logout"
        >
          <span>log out</span>
        </button>
      </div>
    </aside>

    <!-- ✅ الصفحات الأطفال تظهر هنا -->
    <main class="flex-1 p-8 overflow-y-auto">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "DashboardView",

  data() {
    return {
      links: [
        { to: "/DashboardView/hero", label: "Hero Section", icon: "🏠" },
        { to: "/DashboardView/services", label: "Services", icon: "🛠️" },
        { to: "/DashboardView/portfolio", label: "Portfolio", icon: "🖼️" },
        { to: "/DashboardView/contact", label: "Contact", icon: "📬" },
        { to: "/DashboardView/footer", label: "Footer", icon: "📄" },
      ],
    };
  },
  methods: {
    logout() {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("expiresAt");

      this.$router.push("/");
    },
  },
};
</script>
