import { Aurelia, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

export class Module1 {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia - Module 1';

        config.map([{
            route: [ '', 'home' ],
            name: 'module1home',
            settings: { icon: 'home' },
            moduleId: PLATFORM.moduleName('../module1home/module1home'),
            nav: true,
            title: 'Module 1 Home'
        }]);

        this.router = router;
    }
}
