module.exports = {
  siteName: "Vinicius Coelho - Desenvolvedor front-end e web designer",
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './content/*.md',
      }
    }
  ],
  templates: {
    Post: '/:slug'
  }
}
