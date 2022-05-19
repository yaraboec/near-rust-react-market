import * as R from 'ramda';
import React, { useEffect, useState } from 'react';

import { getAllUserNFTs } from '../utils/nft-tools';

import './my-nfts.css';

const MyNFTs = () => {
  const [ userNFTs, setUserNFTs ] = useState( {} );

  useEffect( () => {
    fetchNFTs();

    console.log( R.pipe(
      R.map( ( x ) => console.log( x ) ),
    )( R.values( userNFTs ) ) );
  }, [] );

  const fetchNFTs = async () => {
    setUserNFTs( await getAllUserNFTs() );
  };

  return ( <div className="App"> Hello </div> );
};

export default MyNFTs;