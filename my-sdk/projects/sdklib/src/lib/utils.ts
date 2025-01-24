export function isMock() {
    return window.location.origin.indexOf('ui-mock') === -1
}