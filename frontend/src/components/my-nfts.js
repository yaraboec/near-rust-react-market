import * as R from 'ramda';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { getAllUserNFTs } from '../utils/nft-tools';

import './my-nfts.css';

const metadataField = [
  'title',
  'description',
  'media',
];

const MyNFTs = () => {
  const [ t ] = useTranslation();
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

  return ( <div className="nft-view"> { !R.isEmpty( userNFTs ) ? R.map( ( [ key, value ] ) =>
    <table className="table-nft-view" key={ key }>
      <article>
        <h1> { R.prop( 'title', value ) } </h1>
      </article>
      <img src={ R.prop( 'media', value ) } alt="media" />
      <label> { R.prop( 'description', value ) } </label>
    </table>,
  R.toPairs( getNFTMetadata( userNFTs ) ) ) :
    <div className="empty-list">
      <article>
        <h1>{ t( 'CREATE_NFT_LABEL' ) } </h1>
      </article>
      <Link to="/minting" >
        <Button className="btn-create-nft">
          { t( 'BTN_CREATE_FIRST_NFT' ) }
        </Button>
      </Link>
    </div> } </div> );
};

export default MyNFTs;