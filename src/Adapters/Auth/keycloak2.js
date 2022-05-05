/*
  # Parse Server Keycloak Authentication

  ## Keycloak `authData`

  ```
    {
      "keycloak": {
        "access_token": "access token you got from keycloak JS client authentication",
        "id": "the id retrieved from client authentication in Keycloak",
        "roles": ["the roles retrieved from client authentication in Keycloak"],
        "groups": ["the groups retrieved from client authentication in Keycloak"]
      }
    }
  ```

  The authentication module will test if the authData is the same as the
  userinfo oauth call, comparing the attributes

  Copy the JSON config file generated on Keycloak (https://www.keycloak.org/docs/latest/securing_apps/index.html#_javascript_adapter)
  and paste it inside of a folder (Ex.: `auth/keycloak.json`) in your server.

  The options passed to Parse server:

  ```
    {
      auth: {
        keycloak: {
          config: require(`./auth/keycloak.json`)
        }
      }
    }
  ```
*/

const { Parse } = require('parse/node');
const httpsRequest = require('./httpsRequest');

const arraysEqual = (_arr1, _arr2) => {
  if (!Array.isArray(_arr1) || !Array.isArray(_arr2) || _arr1.length !== _arr2.length) return false;

  var arr1 = _arr1.concat().sort();
  var arr2 = _arr2.concat().sort();

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

const handleAuth = async ({ access_token, id, roles, groups } = {}, { config } = {}) => {

  console.log('hehe');

};

/*
  @param {Object} authData: the client provided authData
  @param {string} authData.access_token: the access_token retrieved from client authentication in Keycloak
  @param {string} authData.id: the id retrieved from client authentication in Keycloak
  @param {Array}  authData.roles: the roles retrieved from client authentication in Keycloak
  @param {Array}  authData.groups: the groups retrieved from client authentication in Keycloak
  @param {Object} options: additional options
  @param {Object} options.config: the config object passed during Parse Server instantiation
*/
function validateAuthData(authData, options = {}) {
  return handleAuth(authData, options);
}

// Returns a promise that fulfills if this app id is valid.
function validateAppId() {
  return Promise.resolve();
}

module.exports = {
  validateAppId,
  validateAuthData,
};
