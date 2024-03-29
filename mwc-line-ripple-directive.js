import { MDCLineRippleFoundation } from '@material/line-ripple/foundation.js';
import { directive } from 'lit-html';
const createAdapter = (lineElement) => {
    return {
        addClass: (className) => lineElement.classList.add(className),
        removeClass: (className) => lineElement.classList.remove(className),
        hasClass: (className) => lineElement.classList.contains(className),
        setStyle: (propertyName, value) => lineElement.style.setProperty(propertyName, value),
        registerEventHandler: (evtType, handler) => {
            lineElement.addEventListener(evtType, handler);
        },
        deregisterEventHandler: (evtType, handler) => {
            lineElement.removeEventListener(evtType, handler);
        },
    };
};
const partToFoundationMap = new WeakMap();
export const lineRipple = directive(() => (part) => {
    const lastFoundation = partToFoundationMap.get(part);
    if (!lastFoundation) {
        const lineElement = part.committer.element;
        lineElement.classList.add('mdc-line-ripple');
        const adapter = createAdapter(lineElement);
        const foundation = new MDCLineRippleFoundation(adapter);
        foundation.init();
        part.setValue(foundation);
        partToFoundationMap.set(part, foundation);
    }
});
//# sourceMappingURL=mwc-line-ripple-directive.js.map