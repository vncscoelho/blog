<template>
  <main class="wrapper">
    <a href="/" class="logo font-primary">
      Vinicius
      <br />Coelho
    </a>
    <slot />
  </main>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
$primary: orangered;

.logo {
  position: fixed;
  font-size: 1.5em;
  color: #c7bcac;
}

.wrapper {
  padding: 5em;
}

body {
  color: #333;
  background: antiquewhite;
}

a {
  color: hotpink;
  font-weight: bold;
  text-decoration: none;
  transition: color 150ms;
  font-family: "IosevkaExtraboldExtended", sans-serif;

  &:hover {
    color: orangered;
  }
}

body,
.font-secondary {
  font-family: "IosevkaMediumExtended", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
.font-primary {
  font-family: "Avara", sans-serif;
}
</style>
