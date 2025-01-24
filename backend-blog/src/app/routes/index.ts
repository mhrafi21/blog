import { Router } from 'express'
import { categoryRoutes } from '../modules/category/category.route'
import { blogRoutes } from '../modules/blog/blog.route'

const router = Router()

const moduleRoutes = [
  {
    path: "/blogs",
    route: blogRoutes
  },
  {
    path: "/category",
    route: categoryRoutes
  }
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
