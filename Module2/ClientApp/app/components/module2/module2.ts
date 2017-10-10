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

        config.map([{
            route: [ 'page1' ],
            name: 'page1',
            moduleId: PLATFORM.moduleName('../page1/page1'),
            nav: true,
            title: 'Page 1'
        }]);

        config.map([{
            route: [ 'page2' ],
            name: 'page2',
            moduleId: PLATFORM.moduleName('../page2/page2'),
            nav: true,
            title: 'Page 2'
        }]);

        this.router = router;
    }
}
