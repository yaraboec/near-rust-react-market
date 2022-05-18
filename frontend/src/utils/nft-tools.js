import * as R from 'ramda';
import BN from 'bn.js';

const ATTACHED_GAS = new BN( '1000000000000000000000000' );
const ATTACHED_OPTIONAL_GAS = 300000000000000;

const formatNFTData = ( nftData ) => {
  return ( {
    token_id : R.prop( 'token_id', nftData ),
    metadata : R.omit( 'token_id', nftData ),
    receiver_id : window.accountId,
  } );
};

const mintNFT = async ( nftData ) => {
  const formattedNFTData = formatNFTData( nftData );
  const isExists =
    await window.contract.nft_token( { token_id : R.prop( 'token_id', formattedNFTData ) } );

  if ( !isExists ) {
    await window.contract.nft_mint( formattedNFTData, ATTACHED_OPTIONAL_GAS, ATTACHED_GAS );
  }
};

export {
  mintNFT,
};