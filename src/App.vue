<template>
  <router-view />
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  scroll-behavior: smooth;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.app-nav {
  position: fixed;
  top: 10px;
  right: 24px;
  z-index: 9999; /* فوق الهيدر الثابت */
  display: flex;
  gap: 2px;
  padding: 3px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(44, 62, 80, 0.12);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);

  a {
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 13px;
    font-weight: 600;
    color: #2c3e50;
    text-decoration: none;
    transition: background 0.2s, color 0.2s;

    &:hover {
      background: rgba(66, 185, 131, 0.15);
    }
    &.router-link-active {
      background: #42b983;
      color: #fff;
    }
  }

  /* داخل الداش بورد: بجانب الـ aside (w-64 = 16rem) */
  &.is-dashboard {
    top: 6px;
    right: auto;
    left: calc(16rem + 12px);
  }
}
</style>
