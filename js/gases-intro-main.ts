// Copyright 2019-2025, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import GasPropertiesConstants from '../../gas-properties/js/common/GasPropertiesConstants.js';
import GasPropertiesPreferences from '../../gas-properties/js/common/model/GasPropertiesPreferences.js';
import GasPropertiesPreferencesNode from '../../gas-properties/js/common/view/GasPropertiesPreferencesNode.js';
import PreferencesModel from '../../joist/js/preferences/PreferencesModel.js';
import Sim, { SimOptions } from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import { combineOptions } from '../../phet-core/js/optionize.js';
import Utils from '../../scenery/js/util/Utils.js';
import Tandem from '../../tandem/js/Tandem.js';
import GasesIntroStrings from './GasesIntroStrings.js';
import IntroScreen from './intro/IntroScreen.js';
import LawsScreen from './laws/LawsScreen.js';

simLauncher.launch( () => {

  /**
   * If the pressureNoise query parameter was not specified in the URL, then set it to false.
   * The default is true for Gas Properties, false for Gases Intro.
   * See https://github.com/phetsims/gases-intro/issues/3
   */
  if ( !QueryStringMachine.containsKey( 'pressureNoise' ) ) {
    GasPropertiesPreferences.pressureNoiseProperty.value = false;
  }

  const titleStringProperty = GasesIntroStrings[ 'gases-intro' ].titleStringProperty;

  const screens = [
    new IntroScreen( Tandem.ROOT.createTandem( 'introScreen' ) ),
    new LawsScreen( Tandem.ROOT.createTandem( 'lawsScreen' ) )
  ];

  const options = combineOptions<SimOptions>( {}, GasPropertiesConstants.SIM_OPTIONS, {
    preferencesModel: new PreferencesModel( {
      visualOptions: {
        supportsProjectorMode: true
      },
      simulationOptions: {
        customPreferences: [ {
          createContent: tandem => new GasPropertiesPreferencesNode( tandem )
        } ]
      }
    } )
  } );

  const sim = new Sim( titleStringProperty, screens, options );

  // Log whether we're using WebGL, which is the preferred rendering option for Sprites
  phet.log && phet.log( `using WebGL = ${phet.chipper.queryParameters.webgl && Utils.isWebGLSupported}` );

  sim.start();
} );