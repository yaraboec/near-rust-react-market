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
  window.nft_contract = await new Contract(
    window.walletConnection.account(),
    process.env.REACT_APP_NFT_CONTRACT_NAME,
    {
      viewMethods : [ 'nft_token', 'nft_tokens_for_owner' ],
      changeMethods : [ 'nft_mint' ],
      sender : window.walletConnection.getAccountId(),
    },
  );
  window.market_contract = await new Contract(
    window.walletConnection.account(),
    process.env.REACT_APP_MARKETPLACE_CONTRACT_NAME,
    {
      viewMethods : [ 'get_supply_sales', 'nft_approve' ],
      changeMethods : [],
      sender : window.walletConnection.getAccountId(),
    },
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
