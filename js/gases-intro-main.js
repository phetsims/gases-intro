// Copyright 2019-2020, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import GasPropertiesConstants from '../../gas-properties/js/common/GasPropertiesConstants.js';
import GasPropertiesGlobalOptions from '../../gas-properties/js/common/GasPropertiesGlobalOptions.js';
import GasPropertiesGlobalOptionsNode from '../../gas-properties/js/common/view/GasPropertiesGlobalOptionsNode.js';
import Sim from '../../joist/js/Sim.js';
import SimLauncher from '../../joist/js/SimLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import gasesIntroStrings from './gases-intro-strings.js';
import IntroScreen from './intro/IntroScreen.js';
import LawsScreen from './laws/LawsScreen.js';

const gasesIntroTitleString = gasesIntroStrings[ 'gases-intro' ].title;

const simOptions = {

  // Creates content for the Options dialog, accessible via the PhET menu
  createOptionsDialogContent: tandem => new GasPropertiesGlobalOptionsNode( {
    tandem: tandem
  } ),

  // Credits appear in the About dialog, accessible via the PhET menu
  credits: GasPropertiesConstants.CREDITS
};

// launch the sim - beware that scenery Image nodes created outside of SimLauncher.launch() will have zero bounds
// until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
SimLauncher.launch( () => {

  /**
   * If the pressureNoise query parameter was not specified in the URL, then set it to false.
   * The default is true for Gas Properties, and this is a workaround to change that default
   * for this derivative sim.  See https://github.com/phetsims/gases-intro/issues/3
   */
  if ( !QueryStringMachine.containsKey( 'pressureNoise' ) ) {
    GasPropertiesGlobalOptions.pressureNoiseProperty.value = false;
  }

  const sim = new Sim( gasesIntroTitleString, [
    new IntroScreen( Tandem.ROOT.createTandem( 'introScreen' ) ),
    new LawsScreen( Tandem.ROOT.createTandem( 'lawsScreen' ) )
  ], simOptions );
  sim.start();
} );