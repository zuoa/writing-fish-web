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

    {
      path: '/agent',
      name: 'Agent 管理',
      routes: [
        {
          path: '/agent/llm',
          name: '模型管理',
          component: '@/pages/llm',
        },
        {
          path: '/agent/list',
          name: 'Agent 列表',
          component: '@/pages/agent',
        },
      ],
    },
  ],

  npmClient: 'npm',
  plugins: ['@umijs/max-plugin-openapi/dist/index.js'],

  proxy: {
    '/api': {
      target: 'http://127.0.0.1:9050',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  openAPI: {
    requestLibPath: "import { request } from '@umijs/max'",
    schemaPath: 'http://127.0.0.1:9050/v2/api-docs',
    // schemaPath:  'https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json', // 或 './src/schema.json'
    mock: false, // 设置为 true 启用 mock 数据
    apiPrefix: "'/api'",
  },
  mfsu: {
    strategy: 'normal',
  },
});
