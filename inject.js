const opt = () => {
  return {
    method: 'GET',
    body: `GET /${Date.now().toString(Math.floor(Math.random()*(36-20)+20))} ` +
      `HTTP/1.1\r\n${Date.now()}: ${Math.random()}`,
    credentials: 'include'
  }
}

(async () => {
  const l = 3;
  let s = [];
  for (let i = 1; i <= l; i++) {
    let o = opt();
    switch (i) {
      case 1:
      case l:
        o.body = null;
        break;
      default:
        o.method = 'POST'
        break;
    }
    const r = await fetch(location.pathname, o);
    s[i] = r.status
  }
  console.log(s)
})();
