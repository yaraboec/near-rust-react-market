import { Contract, WalletConnection, connect, keyStores } from 'near-api-js';
import getConfig from '../config/near_config';

const nearConfig = getConfig( process.env.REACT_APP_NODE_ENV || 'development' );

const initContract = async () => {
  const near = await connect( Object.assign(
    { deps : { keyStore : new keyStores.BrowserLocalStorageKeyStore() } },
    nearConfig,
  ) );

  window.walletConnection = new WalletConnection( near );
  window.accountId = window.walletConnection.getAccountId();
  window.contract = await new Contract(
    window.walletConnection.account(),
    window.accountId,
    { viewMethods : [ 'nft_token', 'nft_tokens_for_owner' ], changeMethods : [ 'nft_mint' ] },
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
