// Copyright 2019, University of Colorado Boulder

/**
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const Property = require( 'AXON/Property' );
  const Screen = require( 'JOIST/Screen' );
  const gasesIntro = require( 'GASES_INTRO/gasesIntro' );
  const GasesIntroModel = require( 'GASES_INTRO/gases-intro/model/GasesIntroModel' );
  const GasesIntroScreenView = require( 'GASES_INTRO/gases-intro/view/GasesIntroScreenView' );

  class GasesIntroScreen extends Screen {

    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {

      const options = {
        backgroundColorProperty: new Property( 'white' ),
        tandem: tandem
      };

      super(
        () => new GasesIntroModel( tandem.createTandem( 'model' ) ),
        ( model ) => new GasesIntroScreenView( model, tandem.createTandem( 'view' ) ),
        options
      );
    }
  }

  return gasesIntro.register( 'GasesIntroScreen', GasesIntroScreen );
} );