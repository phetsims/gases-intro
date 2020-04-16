// Copyright 2019-2020, University of Colorado Boulder

/**
 * The 'Laws' screen is identical to the 'Ideal' screen from Gas Properties sim, with a different title.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import IdealScreen from '../../../gas-properties/js/ideal/IdealScreen.js';
import Tandem from '../../../tandem/js/Tandem.js';
import gasesIntro from '../gasesIntro.js';
import gasesIntroStrings from '../gasesIntroStrings.js';

class LawsScreen extends IdealScreen {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {
    assert && assert( tandem instanceof Tandem, `invalid tandem: ${tandem}` );

    super( tandem, {
      name: gasesIntroStrings.screen.laws
    } );
  }
}

gasesIntro.register( 'LawsScreen', LawsScreen );
export default LawsScreen;