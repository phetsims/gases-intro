// Copyright 2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const GasPropertiesConstants = require( 'GAS_PROPERTIES/common/GasPropertiesConstants' );
  const GasPropertiesGlobalOptions = require( 'GAS_PROPERTIES/common/GasPropertiesGlobalOptions' );
  const GasPropertiesGlobalOptionsNode = require( 'GAS_PROPERTIES/common/view/GasPropertiesGlobalOptionsNode' );
  const IntroScreen = require( 'GASES_INTRO/intro/IntroScreen' );
  const LawsScreen = require( 'GASES_INTRO/laws/LawsScreen' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
  const Tandem = require( 'TANDEM/Tandem' );

  // strings
  const gasesIntroTitleString = require( 'string!GASES_INTRO/gases-intro.title' );

  /**
   * If the pressureNoise query parameter was not specified in the URL, then set it to false.
   * The default is true for Gas Properties, and this is a workaround to change that default
   * for this derivative sim.  See https://github.com/phetsims/gases-intro/issues/3
   */
  if ( !QueryStringMachine.containsKey( 'pressureNoise' ) ) {
    GasPropertiesGlobalOptions.pressureNoiseProperty.value = false;
  }

  const simOptions = {

    // Creates content for the Options dialog, accessible via the PhET menu
    createOptionsDialogContent: tandem => new GasPropertiesGlobalOptionsNode( {
      tandem: tandem
    }),

    // Credits appear in the About dialog, accessible via the PhET menu
    credits: GasPropertiesConstants.CREDITS
  };

  // launch the sim - beware that scenery Image nodes created outside of SimLauncher.launch() will have zero bounds
  // until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
  SimLauncher.launch( () => {
    const sim = new Sim( gasesIntroTitleString, [
      new IntroScreen( Tandem.rootTandem.createTandem( 'introScreen' ) ),
      new LawsScreen( Tandem.rootTandem.createTandem( 'lawsScreen' ) )
    ], simOptions );
    sim.start();
  } );
} );