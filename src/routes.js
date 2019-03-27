'use strict';

import DynamicImport from 'app/components/DynamicImport';

const WebsiteRoutes = {
    childRoutes: [

        {
            path: '/',
            indexRoute: {
                getComponent(location, cb) {
                    DynamicImport(
                        import(/* webpackChunkName: "home" */'app/content/Home'),
                        cb,
                        'home'
                    );
                }
            },
        },
        {
            path: 'PortFolio',
            indexRoute: {
                getComponent(location, cb) {
                    DynamicImport(
                        import(/* webpackChunkName: "PortFolio" */'app/content/PortFolio'),
                        cb,
                        'PortFolio'
                    );
                }
            },
        },
        {
            path: 'about',
            indexRoute: {
                getComponent(location, cb) {
                    DynamicImport(
                        import(/* webpackChunkName: "about" */'app/content/About'),
                        cb,
                        'about'
                    );
                }
            },
        },
        {
            path: 'contact-us',
            indexRoute: {
                getComponent(location, cb) {
                    DynamicImport(
                        import(/* webpackChunkName: "contact-us" */'app/content/ContactUs'),
                        cb,
                        'contact-us'
                    );
                }
            },
        },
        {
            path: '*',
            getComponent(location, cb) {
                DynamicImport(
                    import(/* webpackChunkName: "page-not-found" */'app/content/PageNotFound'),
                    cb,
                    'page-not-found'
                );
            }
        },

    ],
};

export default WebsiteRoutes;
