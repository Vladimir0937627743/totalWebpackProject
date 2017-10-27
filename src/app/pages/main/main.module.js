'use strict';

import route from './main.route';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './footer.scss';
import './themify-icons.css';
// import './main.js';
import './superfish.css';
import tmp from './productInfo.html';

const mainPageModule = angular.module('main-module', [
  'ui.router'
]);

angular.module('main-module').
component('productInfo', {
    template: tmp,
    controller: function totalInfoController() {
        this.products = [
            {
                img: '../../../assets/images/img_large_1.jpg',
                h3: ' Web Developer',
                p: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.'
            }, {
                img: '../../../assets/images/img_large_2.jpg',
                h3: ' User Experience',
                p: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.'
            }, {
                img: '../../../assets/images/img_large_2.jpg',
                h3: ' Web Designer',
                p: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.'
            }, {
                img: '../../../assets/images/img_large_3.jpg',
                h3: ' Web Analyst',
                p: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.'
            }
        ];
    }
});
angular.module('main-module').
component('featuresInfo', {
    template:
    '<div ng-repeat="feature in $ctrl.features">'+
    '<div class="col-md-4 col-sm-6 text-center fh5co-feature feature-box">'+
    '<div class="fh5co-feature-icon">'+
    '<i class="{{feature.img}}"></i>'+
    '</div>'+
    '<h3 class="heading">{{feature.h3}}</h3>'+
    '<p>{{feature.p}}</p>'+
    '</div>'+
    '<div class="clearfix visible-sm-block"></div>'+
    '</div>',
    controller: function totalFeaturesController() {
        this.features = [
            {
                img: 'ti-mobile',
                h3: 'Mobile',
                p: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.'
            }, {
                img: 'ti-lock',
                h3: 'Lock',
                p: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.'
            }, {
                img: 'ti-video-camera',
                h3: 'Video',
                p: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.'
            }, {
                img: 'ti-shopping-cart',
                h3: 'Shop',
                p: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.'
            }, {
                img: 'ti-palette',
                h3: 'Pallete',
                p: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.'
            }, {
                img: 'ti-truck',
                h3: 'Deliver',
                p: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.'
            }
        ];
    }
});

mainPageModule
    .config(route);

export default mainPageModule;
