import { Aurelia, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia';
        config.map([{
            route: [ '', 'home' ],
            name: 'home',
            settings: { icon: 'home' },
            moduleId: PLATFORM.moduleName('../home/home'),
            nav: true,
            title: 'Home'
        }]);

        config.map([{
            route: 'module1',
            name: 'module1',
            settings: { icon: 'star' },
            moduleId: 'app/components/module1/module1',
            nav: true,
            title: 'Module 1'
        }]);

        this.router = router;
    }
}
