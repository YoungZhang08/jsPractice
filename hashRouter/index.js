class Router {
    constructor() {
        this.routes = {};
        this.currentUrl = '';
    }

    route(path, callback) {
        this.routes[path] = callback || function() {};
        console.log(this.routes);
        // {
        //     '/', () => {},
        //     '/about', () => {},
        //     '/topics', () => {},
        // }
    }

    updateView() {
        this.currentUrl = location.hash.slice(1) || '/';
        // 如果存在该路径，则执行该路径对应的回调函数
        this.routes[this.currentUrl] && this.routes[this.currentUrl]();
    }

    init() { // 初始化路由，在load事件触发后刷新页面
        window.addEventListener('load', this.updateView.bind(this), false);
        window.addEventListener('hashchange', this.updateView.bind(this), false); // 绑定hashchange事件，hash值改变时触发对应回调函数
    }
}