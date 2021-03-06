'use strict';

describe('Directive: zgChallengeMini', function () {

    // Use chaijs.com for expects
    var expect = chai.expect;

    var element;

    beforeEach(function () {
        module('zagalesDiyApp');

        module('templates');
    });

    beforeEach(inject(function ($rootScope, $compile) {
	      var scope = $rootScope.$new();

        scope.data = {
            title: 'one title',
            image: 'http://dumy.com/image.png',
            username: 'my username',
            avatar: 'http://placekitten.com/40/40',
            tags: ['foo', 'bar']
        };

        element = angular.element('<zg-challenge-mini ng-model="data"></zg-challenge-mini>');
        element = $compile(element)(scope);
        scope.$digest();

    }));

    it('should have a title', inject(function () {
        var titles = element.find('header');
        expect(titles).to.have.length(1);

        expect(titles.eq(0).text()).to.equal('one title');
    }));

    it('should have an image', inject(function () {
        var images = element.find('.thumb__image img');

        expect(images).to.have.length(1);

        var image = images.eq(0);
        expect(image.attr('ng-src')).to.equal('http://dumy.com/image.png');
    }));

    it('should have an avatar', inject(function () {
        var avatar = element.find('div.thumb__meta img').eq(0);
        expect(avatar.attr('ng-src')).to.equal('http://placekitten.com/40/40');
    }));

    it('should have a username', inject(function () {
        var username = element.find('div.thumb__meta span').eq(0);
        expect(username.text()).to.equal('my username');
    }));

    it('should have tags', inject(function () {
        var tags = element.find('div.thumb__cats a');

        expect(tags).to.have.length(2);

      console.log(tags.eq(0).text());

        expect(tags.eq(0).text()).to.equal('cat 1');
        expect(tags.eq(1).text()).to.equal('cat 2');
    }));
});
