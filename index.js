/**
 * HTMLElement.prototype.matches
 *
 * @author Ryan Hefner <hi@ryanhefner.com>
 */

'use strict';

module.exports = (function() {
    if (!HTMLElement.prototype.matches) {
        HTMLElement.prototype.matches = HTMLElement.prototype.webkitMatchesSelector
            || HTMLElement.prototype.mozMatchesSelector
            || HTMLElement.prototype.msMatchesSelector
            || HTMLElement.prototype.oMatchesSelector;
    }
})();
