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
      path: '/draft',
      component: '@/pages/Draft',
      name: '草稿管理',
    },
  ],
  npmClient: 'npm',
});
