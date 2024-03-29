import { MDCLineRippleFoundation } from '@material/line-ripple/foundation.js';
import { PropertyPart } from 'lit-html';
export interface LineRipple extends HTMLElement {
    foundation: MDCLineRippleFoundation;
}
export declare const lineRipple: () => (part: PropertyPart) => void;
