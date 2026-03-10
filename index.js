export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = url.searchParams.get('url');
    
    if (!target) return new Response('missing ?url=', { status: 400 });
    
    const allowed = [
      'stooq.com', 'fred.stlouisfed.org', 
      'production.dataviz.cnn.io', 'api.alternative.me',
      'api.fiscaldata.treasury.gov', 'feargreedmeter.com'
    ];
    
    const targetHost = new URL(target).hostname;
    if (!allowed.some(d => targetHost.endsWith(d))) {
      return new Response('domain not allowed', { status: 403 });
    }
    
    const resp = await fetch(target, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    
    const body = await resp.text();
    
    return new Response(body, {
      headers: {
        'Content-Type': resp.headers.get('Content-Type') || 'text/plain',
        'Access-Control-Allow-Origin': '*',
      }
    });
  }
}
