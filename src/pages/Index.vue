<template>
  <main class="home wrapper">
    <header class="home__cover-letter">
      <h1>
        Vinicius
        <br />Coelho
      </h1>
      <h2 class="font-secondary">
        Front-end developer e freelance web designer,
        <br />trabalhando na
        <a href="https://deliverymuch.com.br">Delivery Much Brasil</a>
      </h2>
    </header>
    <section class="home__posts">
      <p>Recentemente, escrevi sobre:</p>
      <div v-for="{ node } in posts" :key="node.id" class="home__post-link">
        <a :href="node.slug" class="font-primary">{{ node.title }}</a>
      </div>
    </section>
    <footer class="home__contact">
      <a href="https://www.linkedin.com/in/vinicius-coelho-6247bb30/">Linkedin</a>
      <a href="https://github.com/vncscoelho">Github</a>
      <a href="mailto:contato@viniciuscoelho.com">contato@viniciuscoelho.com</a>
    </footer>
  </main>
</template>

<script>
export default {
  metaInfo: {
    title: "Oi!"
  },
  computed: {
    posts () {
      return this.$page.posts.edges;
    }
  }
};
</script>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id
        title
        slug
      }
    }
  }
}
</page-query>

<style lang="scss">
.home {
  &__cover-letter {
    h1 {
      font-size: 2rem;
      margin-bottom: 1em;
    }

    h2 {
      margin-bottom: 2em;
    }
  }

  &__post-link {
    font-size: 3rem;
    padding: 1.5rem 0;
    margin: 1.5rem 0;
    line-height: 3rem;

    a {
      color: seagreen;

      &:hover {
        color: mediumseagreen;
      }
    }
  }

  &__contact {
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    font-size: 0.75rem;

    a + a {
      margin-left: 2em;
    }
  }
}
</style>
