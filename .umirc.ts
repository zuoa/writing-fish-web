import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '码向未来',
  },
  proxy: {
    '/api': {
      target: 'http://localhost:5090/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  routes: [
    {
      path: '/',
      redirect: '/draft',
    },
    {
      path: '/topic',
      component: '@/pages/Topic',
      name: '选题管理',
    },
    {
      path: '/topic/:id',
      component: '@/pages/Topic/detail',
      exact: true,
    },

    {
      path: '/draft',
      component: '@/pages/Draft',
      name: '草稿管理',
    },
  ],

  npmClient: 'npm',
  plugins: ['@umijs/max-plugin-openapi/dist/index.js'],

  openAPI: {
    requestLibPath: "import { request } from '@umijs/max'",
    // schemaPath: "http://127.0.0.1:5090/apispec_1.json",
    schemaPath:  'https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json', // 或 './src/schema.json'
    mock: false, // 设置为 true 启用 mock 数据
    projectName: 'umi-max',

  },
  mfsu: {
    strategy: 'normal',
  },
});
