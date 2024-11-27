// Copyright 2020-2024, University of Colorado Boulder

/* eslint-disable */
/* @formatter:off */

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */

import getStringModule from '../../chipper/js/browser/getStringModule.js';
import type LocalizedStringProperty from '../../chipper/js/browser/LocalizedStringProperty.js';
import gasesIntro from './gasesIntro.js';

type StringsType = {
  'gases-intro': {
    'titleStringProperty': LocalizedStringProperty;
  };
  'screen': {
    'introStringProperty': LocalizedStringProperty;
    'lawsStringProperty': LocalizedStringProperty;
  }
};

const GasesIntroStrings = getStringModule( 'GASES_INTRO' ) as StringsType;

gasesIntro.register( 'GasesIntroStrings', GasesIntroStrings );

export default GasesIntroStrings;
