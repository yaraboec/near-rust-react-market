import { connect, Contract, keyStores, WalletConnection } from 'near-api-js';
import getConfig from '../config/near_config';

const nearConfig = getConfig( process.env.REACT_APP_NODE_ENV || 'development' );

const initContract = async () => {
  const near = await connect( Object.assign(
    { deps : { keyStore : new keyStores.BrowserLocalStorageKeyStore() } },
    nearConfig,
  ) );

  window.walletConnection = new WalletConnection( near );
  window.accountId = window.walletConnection.getAccountId();
  console.log( window.walletConnection.account() );
  window.contract = await new Contract(
    window.walletConnection.account(),
    window.accountId,
    { viewMethods : [ 'get_num' ], changeMethods : [ 'increment' ] },
  );
};

const login = () => {
  window.walletConnection.requestSignIn( nearConfig.contractName );
};

const logout = () => {
  window.walletConnection.signOut();
  window.location.replace( window.location.origin + window.location.pathname );
};

export {
  login,
  initContract,
  logout,
};
