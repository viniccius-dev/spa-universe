import { Router } from './router.js'

const router = new Router()
router.addPathRoute('/','/pages/home.html')
router.addPathRoute('/theUniverse','/pages/theUniverse.html')
router.addPathRoute('/exploration','/pages/exploration.html')
router.addPathRoute(404,'/pages/404.html')

router.addPathImage('/','/assets/background-home.jpeg')
router.addPathImage('/theUniverse','/assets/background-theUniverse.jpeg')
router.addPathImage('/exploration','/assets/background-exploration.jpeg')
router.addPathImage(404,'/assets/background-home.jpeg')

router.handle()
window.onpopstate = () => router.handle()

window.route = () => router.route()
