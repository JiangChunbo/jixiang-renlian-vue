import Vue from 'vue'
import VueRouter from 'vue-router'

import layout from '@/layout/layout'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: layout,
        children: [
            {
                path: "single",
                component: () => import('@/components/single-video')
            },
            {
                path: "multi",
                component: () => import('@/components/video-list')
            },
        ]
    },
];

export default new VueRouter({
    routes
});