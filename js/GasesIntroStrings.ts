// Copyright 2020-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import gasesIntro from './gasesIntro.js';

type StringsType = {
  'gases-intro': {
    'title': string;
    'titleStringProperty': TReadOnlyProperty<string>;
  };
  'screen': {
    'intro': string;
    'introStringProperty': TReadOnlyProperty<string>;
    'laws': string;
    'lawsStringProperty': TReadOnlyProperty<string>;
  }
};

const gasesIntroStrings = getStringModule( 'GASES_INTRO' ) as StringsType;

gasesIntro.register( 'gasesIntroStrings', gasesIntroStrings );

export default gasesIntroStrings;
