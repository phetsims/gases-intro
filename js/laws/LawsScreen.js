// Copyright 2019-2022, University of Colorado Boulder

// @ts-nocheck
/**
 * The 'Laws' screen is identical to the 'Ideal' screen from Gas Properties sim, with a different title.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import IdealScreen from '../../../gas-properties/js/ideal/IdealScreen.js';
import Tandem from '../../../tandem/js/Tandem.js';
import gasesIntro from '../gasesIntro.js';
import GasesIntroStrings from '../GasesIntroStrings.js';

class LawsScreen extends IdealScreen {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {
    assert && assert( tandem instanceof Tandem, `invalid tandem: ${tandem}` );

    super( tandem, {
      name: GasesIntroStrings.screen.lawsStringProperty
    } );
  }
}

gasesIntro.register( 'LawsScreen', LawsScreen );
export default LawsScreen;