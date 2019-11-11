import table from './table';

const output = document.createElement('textarea');
const keyboard = document.createElement('div');
const body = document.querySelector('body');

function createKey(keyClass) {
    const key = document.createElement('div');
    key.classList.add(keyClass);
    return key;
}

function createSpan(firstClass, secClass) {
    const span = document.createElement('span');
    span.classList.add(firstClass);
    span.classList.add(secClass);
    return span;
}

function appendChildren(parent, children) {
    children.forEach(el => {
        parent.append(el);
    });
}


output.classList.add('output');
keyboard.classList.add('keyboard');

const keys = [];

for (let i = 0; i < 60; i += 1) {
    keys.push(createKey('key'));
}

keys.forEach((key, i) => {
    if ([13, 14, 27, 28, 40, 52, 53, 54, 55, 57, 58, 59].includes(i)) {
        key.classList.add('key-functional');
    }
});

appendChildren(keyboard, keys);

keys.forEach((key, i) => {
    key.append(createSpan(`${table.keyCodes[i]}`, 'secondLang'));
    key.append(createSpan(`${table.keyCodes[i]}`, 'currentLang'));

    Array.from(key.children).forEach(span => {
        span.append(createSpan('case', 'on'));
        span.append(createSpan('case', 'off'));
    });
});

document.body.append(output, keyboard);

const uniqueKeys = [
    keys[13],
    keys[27],
    keys[28],
    keys[40],
    keys[52],
    keys[56],
    keys[58]
];
const [
    backspace,
    enter,
    capslock,
    leftShift,
    rightShift,
    space,
    fn
] = uniqueKeys;
backspace.classList.add('key-backspace');
enter.classList.add('key-enter');

Array.from(enter.children).forEach(el => {
    Array.from(el.children).forEach(span => {
        span.classList.add('enter-centered');
    });
});

capslock.classList.add('key-capslock');
leftShift.classList.add('key-leftShift');
rightShift.classList.add('key-rightShift');
space.classList.add('key-space');
fn.classList.add('key-lang');

function createLettersArray(selector, arrOfTable) {
    const array = Array.from(document.querySelectorAll(selector));

    array.forEach((e, i) => {
        e.textContent = table[arrOfTable][i];
    });

    return array;
}

createLettersArray('.currentLang .case.off', 'engLower');
createLettersArray('.currentLang .case.on', 'engUpper');
createLettersArray('.secondLang .case.off', 'ruLower');
createLettersArray('.secondLang .case.on', 'ruUpper');

function checkCase(currentCase) {
    return currentCase !== true;
}

function changeCase() {
    const caseOff = document.querySelectorAll('.case.off');
    const caseOn = document.querySelectorAll('.case.on');

    caseOn.forEach(el => {
        el.classList.add('off');
        el.classList.remove('on');
    });

    caseOff.forEach(el => {
        el.classList.add('on');
        el.classList.remove('off');
    });
}

function changeLang() {
    const langKey = document.querySelector('.key-lang');

    if (
        localStorage.getItem('lang') === null ||
        localStorage.getItem('lang') === 'eng'
    ) {
        localStorage.setItem('lang', 'ru');
        langKey.textContent = 'Ru';
    } else {
        localStorage.setItem('lang', 'eng');
        langKey.textContent = 'Eng';
    }

    const langEng = document.querySelectorAll('.currentLang');
    const LangRu = document.querySelectorAll('.secondLang');

    langEng.forEach(el => {
        el.classList.add('secondLang');
        el.classList.remove('currentLang');
    });

    LangRu.forEach(el => {
        el.classList.add('currentLang');
        el.classList.remove('secondLang');
    });
}

if (localStorage.getItem('lang') === 'ru') {
    changeLang();
    localStorage.setItem('lang', 'ru');
    document.querySelector('.key-lang').textContent = 'Ru';
}


let upperCase = false;

body.addEventListener('keydown', e => {
    e.preventDefault();

    if (!table.keyCodes.includes(e.code)) {
        return;
    }

    const pressedKey = document.querySelector(`.${e.code}`).parentNode;

    if (e.key !== 'CapsLock') {
        pressedKey.classList.add('active');
    }

    switch (e.key) {
        case 'Shift':
            if (
                leftShift.classList.contains('active-mobile') ||
                rightShift.classList.contains('active-mobile')
            ) {
                break;
            }

            if (e.repeat === false) {
                upperCase = checkCase(upperCase);
                changeCase();
            }
            break;

        case 'CapsLock':
            if (e.repeat === false) {
                upperCase = checkCase(upperCase);
                changeCase();
                pressedKey.classList.toggle('active');
            }
            break;

        case 'Enter':
            output.value += '\n';
            break;

        case 'Tab':
            output.value += '\t';
            break;

        case 'Backspace':
            output.value = output.value.slice(0, -1);
            break;

        case 'Control':
        case 'Alt':
        case 'Meta':
            break;

        default:
            if (
                rightShift.classList.contains('active-mobile') ||
                leftShift.classList.contains('active-mobile')
            ) {
                if (localStorage.getItem('lang') === 'ru' && upperCase) {
                    output.value +=
                        table.ruUpper[table.keyCodes.indexOf(e.code)];
                } else if (
                    localStorage.getItem('lang') === 'ru' &&
                    !upperCase
                ) {
                    output.value +=
                        table.ruLower[table.keyCodes.indexOf(e.code)];
                } else if (upperCase) {
                    output.value +=
                        table.engUpper[table.keyCodes.indexOf(e.code)];
                } else {
                    output.value +=
                        table.engLower[table.keyCodes.indexOf(e.code)];
                }

                upperCase = checkCase(upperCase);
                changeCase();
                leftShift.classList.remove('active-mobile');
                rightShift.classList.remove('active-mobile');
                break;
            }

            if (localStorage.getItem('lang') === 'ru' && upperCase) {
                output.value += table.ruUpper[table.keyCodes.indexOf(e.code)];
            } else if (localStorage.getItem('lang') === 'ru' && !upperCase) {
                output.value += table.ruLower[table.keyCodes.indexOf(e.code)];
            } else if (upperCase) {
                output.value += table.engUpper[table.keyCodes.indexOf(e.code)];
            } else {
                output.value += table.engLower[table.keyCodes.indexOf(e.code)];
            }
    }
});

body.addEventListener('keyup', e => {
    e.preventDefault();

    if (!table.keyCodes.includes(e.code)) {
        return;
    }

    const pressedKey = document.querySelector(`.${e.code}`).parentNode;

    if (e.key !== 'CapsLock') {
        pressedKey.classList.remove('active');
    }

    if (e.key === 'Shift') {
        if (leftShift.classList.contains('active-mobile')) {
            leftShift.classList.remove('active-mobile');
            upperCase = checkCase(upperCase);
            changeCase();
        } else if (rightShift.classList.contains('active-mobile')) {
            rightShift.classList.remove('active-mobile');
            upperCase = checkCase(upperCase);
            changeCase();
        } else {
            upperCase = checkCase(upperCase);
            changeCase();
        }
    }
});

function pressMultipleKeys(func, element, ...requiredKeys) {
    const pressedKeys = new Set();

    element.addEventListener('keydown', e => {
        pressedKeys.add(e.key);

        for (let i = 0; i < requiredKeys.length; i += 1) {
            if (!pressedKeys.has(requiredKeys[i])) {
                return;
            }
        }

        pressedKeys.clear();

        func();
    });

    element.addEventListener('keyup', e => {
        pressedKeys.delete(e.key);
    });
}

pressMultipleKeys(changeLang, body, 'Alt', 'Control');

keyboard.addEventListener('click', e => {
    if (e.target.classList.contains('keyboard')) {
        return;
    }

    switch (e.target.textContent) {
        case 'Shift':
            if (
                leftShift.classList.contains('active') ||
                rightShift.classList.contains('active')
            ) {
                break;
            }

            if (e.target.parentNode.classList.contains('ShiftLeft')) {
                leftShift.classList.toggle('active-mobile');
            } else if (e.target.parentNode.classList.contains('ShiftRight')) {
                rightShift.classList.toggle('active-mobile');
            }

            if (
                leftShift.classList.contains('active-mobile') &&
                e.target.parentNode.classList.contains('ShiftRight')
            ) {
                leftShift.classList.remove('active-mobile');
                break;
            } else if (
                rightShift.classList.contains('active-mobile') &&
                e.target.parentNode.classList.contains('ShiftLeft')
            ) {
                rightShift.classList.remove('active-mobile');
                break;
            }

            upperCase = checkCase(upperCase);
            changeCase();
            break;

        case 'CapsLock':
            upperCase = checkCase(upperCase);
            changeCase();
            capslock.classList.toggle('active');
            break;

        case 'Enter':
            output.value += '\n';
            break;

        case 'Tab':
            output.value += '\t';
            break;

        case 'Backspace':
            output.value = output.value.slice(0, -1);
            break;

        case 'Ctrl':
        case 'Alt':
        case 'Win':
            break;
        case 'Eng':
        case 'Ru':
            changeLang();
            break;
        default:
            output.value += e.target.textContent;
            if (
                rightShift.classList.contains('active-mobile') ||
                leftShift.classList.contains('active-mobile')
            ) {
                changeCase();
                leftShift.classList.remove('active-mobile');
                rightShift.classList.remove('active-mobile');
            }
    }
});
