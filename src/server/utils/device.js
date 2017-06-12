import useragent from 'useragent';

export function device(koaCtx) {
    const browsers = ['chrome', 'firefox', 'safari', 'ie', 'opera', 'mozzilla'];
    const mobileDevices = ['android', 'mobile-safari'];
    const userAgentStr = koaCtx.request.header['user-agent'];

    return {
        isBrowser() {
            return browsers.filter(name => useragent.is(userAgentStr)[name] === true).length > 0;
        },

        isMobile() {
            return mobileDevices.filter(name => useragent.is(userAgentStr)[name] === true).length > 0;
        }
    }
}