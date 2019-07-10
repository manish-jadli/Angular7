// app/translate/translation.ts

import { InjectionToken } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_HI_NAME, LANG_HI_TRANS } from './lang-hi';
import { LANG_CH_NAME, LANG_CH_TRANS } from './lang-ch';

// translation token
export const TRANSLATIONS = new InjectionToken('translations');

// all traslations
const dictionary = {
	[LANG_EN_NAME]: LANG_EN_TRANS,
	[LANG_HI_NAME]: LANG_HI_TRANS,
	[LANG_CH_NAME]: LANG_CH_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
	{ provide: TRANSLATIONS, useValue: dictionary },
];