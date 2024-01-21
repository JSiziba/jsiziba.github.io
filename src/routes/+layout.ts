import hljs from 'highlight.js/lib/core';

import 'highlight.js/styles/github-dark.css';
import { storeHighlightJs } from '@skeletonlabs/skeleton';

export const prerender = true;

// Import each language module you require
import xml from 'highlight.js/lib/languages/xml'; // for HTML
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import shell from 'highlight.js/lib/languages/shell';
import java from 'highlight.js/lib/languages/java';
import plaintext from 'highlight.js/lib/languages/plaintext';
import dart from 'highlight.js/lib/languages/dart';

hljs.registerLanguage('xml', xml); // for HTML
hljs.registerLanguage('css', css);
hljs.registerLanguage('json', json);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('java', java);
hljs.registerLanguage('plaintext', plaintext);
hljs.registerLanguage('dart', dart);

storeHighlightJs.set(hljs);
