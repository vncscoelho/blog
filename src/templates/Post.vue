<template>
  <Default>
    <section class="blog">
      <article class="blog__post">
        <h1>{{ $page.posts.edges[0].node.title }}</h1>
        <div v-html="$page.posts.edges[0].node.content">{{}}</div>
      </article>
    </section>
  </Default>
</template>

<script>
import Default from '@/layouts/Default.vue'

export default {
  components: {
    Default
  }
}
</script>

}
</script>

<style lang="scss">
.blog {
  max-width: 1040px;
  margin: 0 auto;

  img {
    max-width: 100%;
  }

  &__post {
    font-family: "Averia";
    max-width: 688px;
    font-size: 1.25em;
    line-height: 2em;
    margin: 0 auto;

    h1 {
      font-size: 4rem;
      margin-bottom: 2em;
      line-height: 2;
      text-align: center;
    }

    h2 {
      font-size: 2rem;
      font-family: "IosevkaHeavyExtended";
      margin-top: 2em;
      margin-bottom: 1em;
    }

    p {
      margin-bottom: 1em;
      a {
        font-size: 1rem;
      }
    }

    code {
      padding: 1em 2em;
      background: #fff;
      display: inline-block;
      border-radius: 1em;
      line-height: 1.6;
      color: #333;
      margin-bottom: 1em;
    }
  }
}
</style>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id
        title
        content
      }
    }
  }
}
</page-query>