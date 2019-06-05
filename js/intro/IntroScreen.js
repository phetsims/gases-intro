// Copyright 2019, University of Colorado Boulder

/**
 * The 'Intro' screen is a specialization of the 'Ideal' screen from Gas Properties sim.
 * It has a different title & icon, and no 'Hold Constant' control.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const gasesIntro = require( 'GASES_INTRO/gasesIntro' );
  const GasPropertiesIconFactory = require( 'GAS_PROPERTIES/common/view/GasPropertiesIconFactory' );
  const IdealScreen = require( 'GAS_PROPERTIES/ideal/IdealScreen' );
  const Tandem = require( 'TANDEM/Tandem' );

  // constants
  const screenIntroString = require( 'string!GASES_INTRO/screen.intro' );

  class IntroScreen extends IdealScreen {

    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {
      assert && assert( tandem instanceof Tandem, `invalid tandem: ${tandem}` );

      super( tandem, {
        name: screenIntroString,
        homeScreenIcon: GasPropertiesIconFactory.createIntroScreenIcon(),
        hasHoldConstantControls: false
      } );
    }
  }

  return gasesIntro.register( 'IntroScreen', IntroScreen );
} );