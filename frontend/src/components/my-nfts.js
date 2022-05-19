import * as R from 'ramda';
import React, { useEffect, useState } from 'react';

import { getAllUserNFTs } from '../utils/nft-tools';

import './my-nfts.css';

const metadataField = [
  'title',
  'description',
  'media',
];

const MyNFTs = () => {
  const [ userNFTs, setUserNFTs ] = useState( {} );

  useEffect( () => {
    fetchNFTs();
  }, [] );

  const fetchNFTs = async () => {
    setUserNFTs( await getAllUserNFTs() );
  };

  const getNFTMetadata = ( userNFTs ) => R.reduce( ( acc, nft ) => {
    const nftData = R.prop( 'metadata', nft );

    return {
      ...acc,
      [ R.prop( 'token_id', nft ) ] : R.pick( metadataField, nftData ),
    };
  }, {} )( R.values( userNFTs ) );

  return ( <div className="nft-view"> { R.map( ( [ key, value ] ) =>
    <table className="table-nft-view" key={ key }>
      <article>
        <h1> { value.title } </h1>
      </article>
      <img src={ value.media } alt="media" />
      <label> { value.description } </label>
    </table>,
  R.toPairs( getNFTMetadata( userNFTs ) ) ) } </div> );
};

export default MyNFTs;