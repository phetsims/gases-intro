// Copyright 2019, University of Colorado Boulder

/**
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const gasesIntro = require( 'GASES_INTRO/gasesIntro' );

  /**
   * @constructor
   */
  class GasesIntroModel  {

    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {
      //TODO
    }

    // @public resets the model
    reset() {
      //TODO Reset things here.
    }

    // @public
    step( dt ) {
      //TODO Handle model animation here.
    }
  }

  return gasesIntro.register( 'GasesIntroModel', GasesIntroModel );
} );