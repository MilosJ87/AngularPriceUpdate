export const authConfig = {
    issuer: 'https://your-identity-server-url',
    redirectUri: window.location.origin + '/index.html',
    clientId: 'your-client-id',
    responseType: 'code',
    scope: 'openid profile email',
  };