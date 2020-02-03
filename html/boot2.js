/**
 * @license
 * Copyright 2012 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview JavaScript for Blockly's Code demo.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

/**
 * Create a namespace for the application.
 */
var Tb_blockly_actionserver = {};

/**
 * Lookup for names of supported languages.  Keys should be in ISO 639 format.
 */
Tb_blockly_actionserver.LANGUAGE_NAME = {
  'ar': 'العربية',
  'be-tarask': 'Taraškievica',
  'br': 'Brezhoneg',
  'ca': 'Català',
  'cs': 'Česky',
  'da': 'Dansk',
  'de': 'Deutsch',
  'el': 'Ελληνικά',
  'en': 'English',
  'es': 'Español',
  'et': 'Eesti',
  'fa': 'فارسی',
  'fr': 'Français',
  'he': 'עברית',
  'hrx': 'Hunsrik',
  'hu': 'Magyar',
  'ia': 'Interlingua',
  'is': 'Íslenska',
  'it': 'Italiano',
  'ja': '日本語',
  'kab': 'Kabyle',
  'ko': '한국어',
  'mk': 'Македонски',
  'ms': 'Bahasa Melayu',
  'nb': 'Norsk Bokmål',
  'nl': 'Nederlands, Vlaams',
  'oc': 'Lenga d\'òc',
  'pl': 'Polski',
  'pms': 'Piemontèis',
  'pt-br': 'Português Brasileiro',
  'ro': 'Română',
  'ru': 'Русский',
  'sc': 'Sardu',
  'sk': 'Slovenčina',
  'sr': 'Српски',
  'sv': 'Svenska',
  'ta': 'தமிழ்',
  'th': 'ภาษาไทย',
  'tlh': 'tlhIngan Hol',
  'tr': 'Türkçe',
  'uk': 'Українська',
  'vi': 'Tiếng Việt',
  'zh-hans': '简体中文',
  'zh-hant': '正體中文'
};

/**
 * List of RTL languages.
 */
Tb_blockly_actionserver.LANGUAGE_RTL = ['ar', 'fa', 'he', 'lki'];



/**
 * Blockly's main workspace.
 * @type {Blockly.WorkspaceSvg}
 */
Tb_blockly_actionserver.workspace = null;

/**
 * Extracts a parameter from the URL.
 * If the parameter is absent default_value is returned.
 * @param {string} name The name of the parameter.
 * @param {string} defaultValue Value to return if parameter not found.
 * @return {string} The parameter value or the default value if not found.
 */

Tb_blockly_actionserver.getStringParamFromUrl = function(name, defaultValue) {
  var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

/**
 * Get the language of this user from the URL.
 * @return {string} User's language.
 */
Tb_blockly_actionserver.getLang = function() {
  var lang = Tb_blockly_actionserver.getStringParamFromUrl('lang', '');
  if (Tb_blockly_actionserver.LANGUAGE_NAME[lang] === undefined) {
    // Default to Russian.
    lang = 'ru';
  }
  return lang;
};


/**
 * Is the current language (Code.LANG) an RTL language?
 * @return {boolean} True if RTL, false if LTR.
 */
Tb_blockly_actionserver.isRtl = function() {
  return Tb_blockly_actionserver.LANGUAGE_RTL.indexOf(Tb_blockly_actionserver.LANG) != -1;
};



/**
 * Save the blocks and reload with a different language.
 */
Tb_blockly_actionserver.changeLanguage = function() {
  // Store the blocks for the duration of the reload.
  // MSIE 11 does not support sessionStorage on file:// URLs.

  var languageMenu = document.getElementById('languageMenu');
  var newLang = encodeURIComponent(
      languageMenu.options[languageMenu.selectedIndex].value);
  var search = window.location.search;
  if (search.length <= 1) {
    search = '?lang=' + newLang;
  } else if (search.match(/[?&]lang=[^&]*/)) {
    search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
  } else {
    search = search.replace(/\?/, '?lang=' + newLang + '&');
  }

  window.location = window.location.protocol + '//' +
      window.location.host + window.location.pathname + search;
};


/**
 * User's language (e.g. "en").
 * @type {string}
 */


Tb_blockly_actionserver.LANG = Tb_blockly_actionserver.getLang();




/**
 * Initialize Blockly.  Called on page load.
 */
Tb_blockly_actionserver.init = function() {
  Tb_blockly_actionserver.initLanguage();
  // Add to reserved word list: Local variables in execution environment (runJS)
  // and the infinite loop detection function.

  Blockly.JavaScript.addReservedWords('code,timeouts,checkTimeout');
/*
  Tb_blockly_actionserver.loadBlocks('');
*/

  // Lazy-load the syntax-highlighting.
  window.setTimeout(Tb_blockly_actionserver.importPrettify, 1);
};

/**
 * Initialize the page language.
 */
Tb_blockly_actionserver.initLanguage = function() {
  // Set the HTML's language and direction.
  var rtl = Tb_blockly_actionserver.isRtl();
  document.dir = rtl ? 'rtl' : 'ltr';
  document.head.parentElement.setAttribute('lang', Tb_blockly_actionserver.LANG);

  // Sort languages alphabetically.
  var languages = [];
  for (var lang in Tb_blockly_actionserver.LANGUAGE_NAME) {
    languages.push([Tb_blockly_actionserver.LANGUAGE_NAME[lang], lang]);
  }
  var comp = function(a, b) {
    // Sort based on first argument ('English', 'Русский', '简体字', etc).
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  };

  languages.sort(comp);

  // Populate the language selection menu.
  var languageMenu = document.getElementById('languageMenu');
  languageMenu.options.length = 0;
  for (var i = 0; i < languages.length; i++) {
    var tuple = languages[i];
    var lang = tuple[tuple.length - 1];
    var option = new Option(tuple[0], lang);
    if (lang == Tb_blockly_actionserver.LANG) {
      option.selected = true;
    }
    languageMenu.options.add(option);
  }
  languageMenu.addEventListener('change', Tb_blockly_actionserver.changeLanguage, true);


  // Inject language strings.
  /*
  document.title += ' ' + MSG['title'];
  document.getElementById('title').textContent = MSG['title'];
  document.getElementById('tab_blocks').textContent = MSG['blocks'];

  document.getElementById('linkButton').title = MSG['linkTooltip'];
  document.getElementById('runButton').title = MSG['runTooltip'];
  document.getElementById('trashButton').title = MSG['trashTooltip'];
  */
  
};





// Load the TurtleBro_blockly's language strings.
document.write('<script src="msg/' + Tb_blockly_actionserver.LANG + '.js"></script>\n');
// Load Blockly's language strings.
document.write('<script src="../google-blockly/msg/js/' + Tb_blockly_actionserver.LANG + '.js"></script>\n');

window.addEventListener('load', Tb_blockly_actionserver.init);
