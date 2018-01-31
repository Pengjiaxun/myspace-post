import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Input from '@/views/input'
import Generator from '@/views/generator'
import Result from '@/views/result'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/input-name',
        name: 'Input',
        component: Input
    }, {
        path: '/generator',
        name: 'Generator',
        component: Generator
    }, {
        path: '/result',
        name: 'Result',
        component: Result
    }]
})
