"use strict";

module.exports = Franz => class Discord extends Franz {
  overrideUserAgent() {
    const useragent = window.navigator.userAgent;
    const parts = useragent.split('(KHTML, like Gecko)');
    return parts.join('(KHTML, like Gecko) discord/0.0.250').replace('Electron', 'Discord').replace('Franz', 'Discord');
  }

};