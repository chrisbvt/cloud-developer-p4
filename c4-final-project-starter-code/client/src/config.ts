// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'nf7c0s2h76'
//https://nf7c0s2h76.execute-api.us-west-2.amazonaws.com/dev
export const apiEndpoint = `https://${apiId}.execute-api.us-west-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-5rlcml6i.auth0.com',            // Auth0 domain
  clientId: '0Sutle3V6qauKVh1abY0vTdSUYpZvRp2',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
