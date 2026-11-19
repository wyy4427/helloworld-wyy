// =====================================================
// HelloWorld 网站 - Vercel Function（Web Standard fetch 写法）
// 访问根路径 / 时返回页面；页面时间由服务器端渲染。
// =====================================================

function renderPage() {
  const now = new Date();
  const timeStr = now.toLocaleString('zh-CN', {
    timeZone: 'Asia/Shanghai',
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>我的第一个AI开发的网站</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex; align-items: center; justify-content: center;
      font-family: "Microsoft YaHei", "PingFang SC", Arial, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #fff;
    }
    .container {
      text-align: center; padding: 40px;
      background: rgba(255,255,255,0.12); border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2); margin: 0 16px;
    }
    h1 { font-size: 28px; margin-bottom: 24px; line-height: 1.5; }
    h1 strong { color: #ffd700; }
    .time-label { font-size: 16px; opacity: 0.9; margin-bottom: 8px; }
    .time-value {
      font-size: 24px; font-weight: bold;
      font-family: Consolas, "Courier New", monospace;
      color: #ffd700; letter-spacing: 1px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Hello World！我是<strong>wyy4427</strong>，我的第一个AI开发的网站</h1>
    <p class="time-label">当前服务器时间：</p>
    <p class="time-value">${timeStr}</p>
  </div>
</body>
</html>`;
}

export default {
  fetch(request) {
    const html = renderPage();
    return new Response(html, {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  },
};
