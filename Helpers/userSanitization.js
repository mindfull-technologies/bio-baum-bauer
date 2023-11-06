

export const changeToUpperCase = (word) => {
    const parts = word.split(' ');
    const changedParts = parts.map(el => el[0].toUpperCase() + el.slice(1));
    return changedParts.join(' ');
}


