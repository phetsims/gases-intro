// Copyright 2019-2020, University of Colorado Boulder

/**
 * The 'Intro' screen is a specialization of the 'Ideal' screen from Gas Properties sim.
 * It has a different title & icon, and no 'Hold Constant' control.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import GasPropertiesIconFactory from '../../../gas-properties/js/common/view/GasPropertiesIconFactory.js';
import IdealScreen from '../../../gas-properties/js/ideal/IdealScreen.js';
import Tandem from '../../../tandem/js/Tandem.js';
import gasesIntro from '../gasesIntro.js';
import gasesIntroStrings from '../gasesIntroStrings.js';

class IntroScreen extends IdealScreen {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {
    assert && assert( tandem instanceof Tandem, `invalid tandem: ${tandem}` );

    super( tandem, {
      name: gasesIntroStrings.screen.intro,
      homeScreenIcon: GasPropertiesIconFactory.createIntroScreenIcon(),
      hasHoldConstantControls: false
    } );
  }
}

gasesIntro.register( 'IntroScreen', IntroScreen );
export default IntroScreen;