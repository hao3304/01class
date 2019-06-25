export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: '零一交大少儿编程',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'keywords',
        content:
          '少儿编程,Scratch,小孩学编程,儿童编程,小学生编程,少儿编程培训,编程课程,大连少儿编程'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '零一交大少儿编程专注于6-17岁少儿编程教育领域发展。在寓教于乐中提升逻辑思考能力、创作力、团队协作能力、沟通表达能力、发现并解决问题能力，同时编程这种命题式教育方式能让孩子学会思考、提升想象、善于探索和创新、学会综合运用在基础教育中学到的文化知识去解决实际问题，是传统应试教育的良好促进和补充。'
      }
    ],
    script: [
      {
        src: 'http://libs.baidu.com/jquery/1.7.2/jquery.min.js'
      },
      {
        src: '/amazeui.min.js'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/normalize.css',
    '@/assets/css/style.less',
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui'],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
