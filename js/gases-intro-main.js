// Copyright 2019-2022, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import GasPropertiesConstants from '../../gas-properties/js/common/GasPropertiesConstants.js';
import GasPropertiesPreferences from '../../gas-properties/js/common/model/GasPropertiesPreferences.js';
import GasPropertiesPreferencesNode from '../../gas-properties/js/common/view/GasPropertiesPreferencesNode.js';
import PreferencesModel from '../../joist/js/preferences/PreferencesModel.js';
import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import { Utils } from '../../scenery/js/imports.js';
import Tandem from '../../tandem/js/Tandem.js';
import GasesIntroStrings from './GasesIntroStrings.js';
import IntroScreen from './intro/IntroScreen.js';
import LawsScreen from './laws/LawsScreen.js';

const simOptions = {

  // Enabled for high-performance Sprites
  webgl: true,
  preferencesModel: new PreferencesModel( {
    visualOptions: {
      supportsProjectorMode: true
    },
    simulationOptions: {
      customPreferences: [ {
        createContent: tandem => new GasPropertiesPreferencesNode( {
          tandem: tandem.createTandem( 'simPreferences' )
        } )
      } ]
    }
  } ),

  // Credits appear in the About dialog, accessible via the PhET menu
  credits: GasPropertiesConstants.CREDITS
};

// launch the sim - beware that scenery Image nodes created outside of simLauncher.launch() will have zero bounds
// until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
simLauncher.launch( () => {

  /**
   * If the pressureNoise query parameter was not specified in the URL, then set it to false.
   * The default is true for Gas Properties, and this is a workaround to change that default
   * for this derivative sim.  See https://github.com/phetsims/gases-intro/issues/3
   */
  if ( !QueryStringMachine.containsKey( 'pressureNoise' ) ) {
    GasPropertiesPreferences.pressureNoiseProperty.value = false;
  }

  const sim = new Sim( GasesIntroStrings[ 'gases-intro' ].titleStringProperty, [
    new IntroScreen( Tandem.ROOT.createTandem( 'introScreen' ) ),
    new LawsScreen( Tandem.ROOT.createTandem( 'lawsScreen' ) )
  ], simOptions );

  // Log whether we're using WebGL, which is the preferred rendering option for Sprites
  phet.log && phet.log( `using WebGL = ${phet.chipper.queryParameters.webgl && Utils.isWebGLSupported}` );

  sim.start();
} );