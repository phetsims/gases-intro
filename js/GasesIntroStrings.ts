// Copyright 2020-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import LinkableProperty from '../../axon/js/LinkableProperty.js';
import gasesIntro from './gasesIntro.js';

type StringsType = {
  'gases-intro': {
    'titleStringProperty': LinkableProperty<string>;
  };
  'screen': {
    'introStringProperty': LinkableProperty<string>;
    'lawsStringProperty': LinkableProperty<string>;
  }
};

const GasesIntroStrings = getStringModule( 'GASES_INTRO' ) as StringsType;

gasesIntro.register( 'GasesIntroStrings', GasesIntroStrings );

export default GasesIntroStrings;
