// Copyright 2020-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import type LocalizedStringProperty from '../../chipper/js/LocalizedStringProperty.js';
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
