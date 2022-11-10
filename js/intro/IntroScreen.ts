// Copyright 2019-2022, University of Colorado Boulder

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
import GasesIntroStrings from '../GasesIntroStrings.js';

export default class IntroScreen extends IdealScreen {

  public constructor( tandem: Tandem ) {
    super( tandem, {
      name: GasesIntroStrings.screen.introStringProperty,
      homeScreenIcon: GasPropertiesIconFactory.createIntroScreenIcon(),
      hasHoldConstantControls: false
    } );
  }
}

gasesIntro.register( 'IntroScreen', IntroScreen );