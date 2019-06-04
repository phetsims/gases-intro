// Copyright 2019, University of Colorado Boulder

/**
 * The 'Laws' screen is identical to the 'Ideal' screen from Gas Properties sim, with a different title.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const gasesIntro = require( 'GASES_INTRO/gasesIntro' );
  const IdealScreen = require( 'GAS_PROPERTIES/ideal/IdealScreen' );
  const Tandem = require( 'TANDEM/Tandem' );

  // constants
  const screenLawsString = require( 'string!GASES_INTRO/screen.laws' );

  class LawsScreen extends IdealScreen {

    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {
      assert && assert( tandem instanceof Tandem, `invalid tandem: ${tandem}` );

      super( tandem, {
        name: screenLawsString
      } );
    }
  }

  return gasesIntro.register( 'LawsScreen', LawsScreen );
} );