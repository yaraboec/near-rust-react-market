import { connect, Contract, keyStores, WalletConnection } from 'near-api-js'
import getConfig from "../config/near_config";

const nearConfig = getConfig( process.env.REACT_APP_NODE_ENV || 'development' )

const initContract = async () => {
  const near = await connect( Object.assign(
    { deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } },
    nearConfig,
  ) );

  window.walletConnection = new WalletConnection( near );
  window.accountId = window.walletConnection.getAccountId();
  window.contract = await new Contract(
    window.walletConnection.account(),
    nearConfig.contractName,
    { viewMethods: [ 'get_greeting' ], changeMethods: [ 'set_greeting' ] },
  );
}

const login = () => {
  window.walletConnection.requestSignIn(nearConfig.contractName);
}

export {
  initContract,
  login,
}