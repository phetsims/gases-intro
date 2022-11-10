// Copyright 2019-2022, University of Colorado Boulder

/**
 * The 'Laws' screen is identical to the 'Ideal' screen from Gas Properties sim, with a different title.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import IdealScreen from '../../../gas-properties/js/ideal/IdealScreen.js';
import Tandem from '../../../tandem/js/Tandem.js';
import gasesIntro from '../gasesIntro.js';
import GasesIntroStrings from '../GasesIntroStrings.js';

export default class LawsScreen extends IdealScreen {

  public constructor( tandem: Tandem ) {
    super( tandem, {
      name: GasesIntroStrings.screen.lawsStringProperty
    } );
  }
}

gasesIntro.register( 'LawsScreen', LawsScreen );