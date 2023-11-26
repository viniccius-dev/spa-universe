export class Router {
    
    routes = {}
    images = {}

    addPathRoute(routeName, page) {
        this.routes[routeName] = page
    }

    addPathImage(routeName, image) {
        this.images[routeName] = image
    }
    
    route(event) {
        const linksCabecario = document.querySelectorAll('a')

        event = event || window.event
        event.preventDefault()

        for(var i = 0; i < linksCabecario.length; i++){
            linksCabecario[i].classList.remove('selected')
        }
        
        event.target.classList.add('selected')

        window.history.pushState({},"",event.target.href)

        this.handle()
    }

    handle() {
        const { pathname } = window.location
        const body = document.querySelector('body')
        const route = this.routes[pathname] || this.routes[404]
        const image = this.images[pathname] || this.images[404]

        body.style.backgroundImage = `url('${image}')`
     
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }

}