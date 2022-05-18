import * as R from 'ramda';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';

import { mintNFT } from '../utils/nft-tools';

import './mint-page.css';

const MintPage = () => {
  const [ t ] = useTranslation();

  const [ nftData, setNftData ] = useState( {
    token_id : '',
    title : '',
    description : '',
    media : '',
  } );
  const [ isButtonDisabled, setIsButtonDisabled ] = useState( true );

  const isNftDataValid = ( nftData ) =>
    !R.pipe( R.values, R.includes( '' ) )( nftData )
    && R.prop( 'media', nftData ).match( /\.(jpeg|jpg|gif|png)$/ ) != null;

  const handleChange = ( e ) => {
    const { name, value } = e.target;
    const updatedNftData = {
      ...nftData,
      [ name ] : value,
    };

    setNftData( updatedNftData );
    setIsButtonDisabled( !isNftDataValid( updatedNftData ) );
  };

  return (
    <div className="App">
      <table className="nft-create-table">
        <tbody>
          <tr className="main-title">
            <article>
              <h1>{ t( 'NFT_CREATE_LABEL' ) }</h1>
            </article>
          </tr>
          <tr>
            <td className="main-title" >
              <Form.Label htmlFor="basic-url">{ t( 'BUTTON_LABEL_TOKEN_ID' ) }</Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  name="token_id"
                  placeholder="Input unique ID..."
                  onChange={ handleChange }
                />
              </InputGroup>
              <Form.Label htmlFor="basic-url">{ t( 'BUTTON_LABEL_LABEL' ) }</Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  name="title"
                  placeholder="Input title..."
                  onChange={ handleChange }
                />
              </InputGroup>
              <Form.Label htmlFor="basic-url">{ t( 'BUTTON_LABEL_DESCRIPTION' ) }</Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  name="description"
                  placeholder="Input description..."
                  onChange={ handleChange }
                />
              </InputGroup>
              <Form.Label htmlFor="basic-url">{ t( 'BUTTON_LABEL_MEDIA' ) }</Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  name="media"
                  placeholder="Input link..."
                  onChange={ handleChange }
                />
              </InputGroup>
            </td>
          </tr>
          <tr className="table-button-tr">
            <Button
              className={ 'btn-mint' }
              onClick={ () => mintNFT( nftData ) }
              disabled={ isButtonDisabled }
            >
              <h5> { t( 'BTN_CREATE_NFT' ) } </h5>
            </Button>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MintPage;