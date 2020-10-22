<template>
  <main class="wrapper">
    <header class="main-header">
      <a href="/" class="main-header__logo font-primary">
        Vinicius
        <br />Coelho
      </a>
      <nav>
        <a href="https://www.linkedin.com/in/vinicius-coelho-6247bb30/">Linkedin</a>
        <a href="https://github.com/vncscoelho">Github</a>
        <a href="mailto:contato@viniciuscoelho.com">E-mail</a>
      </nav>
    </header>
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

.main-header {
  position: fixed;
  height: calc(100vh - 10em);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    color: #c7bcac;
  }

  &__logo {
    font-size: 1.5em;
    margin-bottom: 1em;
    display: inline-block;
  }

  nav {
    font-size: 0.8em;
    display: flex;
    flex-direction: column;

    a + a {
      margin-top: 0.5em;
    }
  }
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
