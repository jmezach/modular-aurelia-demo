import { Aurelia, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

export class Module2 {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia - Module 2';

        config.map([{
            route: [ '', 'home' ],
            name: 'module2home',
            settings: { icon: 'home' },
            moduleId: PLATFORM.moduleName('../module2home/module2home'),
            nav: true,
            title: 'Module 2 Home'
        }]);

        this.router = router;
    }
}
