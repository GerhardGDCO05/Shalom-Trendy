
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'vue-router' {
  import { Router, RouteRecordRaw, RouterHistory } from 'vue-router'
  
  interface RouterOptions {
    history: RouterHistory
    routes: RouteRecordRaw[]
  }
  
  export function createRouter(options: RouterOptions): Router
  export function createWebHistory(base?: string): RouterHistory
  export type { Router, RouteRecordRaw }
}