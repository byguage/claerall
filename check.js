navigator.userAgentData.getHighEntropyValues(['uaFullVersion', 'platform', 'model', 'brands'])
    .then((uaData) => {
        console.log(uaData);
        if (uaData.brands.some(brand => brand.brand === 'Microsoft Edge')) {
            document.getElementById('reasonFive').innerHTML = '<strong>原因五：你的微软浏览器启用了 HSTS 功能请关闭它或等待缓存刷新</strong>';
        } else if (navigator.userAgent.indexOf("Chrome") !== -1 && navigator.userAgent.indexOf("Edge") === -1) {
            document.getElementById('reasonFive').innerHTML = '<strong>原因五：你的谷歌浏览器启用了 HSTS 功能请关闭它或等待缓存刷新</strong>';
        }
    })
    .catch((error) => {
        console.log(error);
    });
