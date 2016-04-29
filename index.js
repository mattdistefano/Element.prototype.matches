/**
 * Element.prototype.matches
 *
 * @author Ryan Hefner <hi@ryanhefner.com>
 */

'use strict';

module.exports = (function() {
    if (Element && !Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector
            || Element.prototype.webkitMatchesSelector
            || Element.prototype.mozMatchesSelector
            || Element.prototype.msMatchesSelector
            || Element.prototype.oMatchesSelector;
    }
})();
