// DOM Refs
const playBtn = document.querySelector('#play-btn');
const difficultySelect = document.querySelector('#difficulty');
const wrapGridEl = document.querySelector('.wrap-grid');

// Gen Grid
playBtn.addEventListener('click', () => {
    let cellsNumber;
    let cellsPerRow;
    switch (difficultySelect.value) {
        case '1':
            cellsNumber = 100;
            cellsPerRow = 10;
            break;
        case '2':
            cellsNumber = 81;
            cellsPerRow = 9;
            break;
        case '3':
            cellsNumber = 49;
            cellsPerRow = 7;
    }
    wrapGridEl.innerHTML = '';
    const gridEl = document.createElement('div');
    gridEl.classList.add('grid');
    wrapGridEl.append(gridEl);
    for (let i = 1; i <= cellsNumber; i++) {
        const square = createSquareGrid(i, cellsPerRow);
        square.addEventListener('click', () => {
            square.classList.toggle('clicked');
        });
        gridEl.append(square);
    }
});

// FUNCTIONS
function createSquareGrid(num, cells) {
    const node = document.createElement('div');
    const span = document.createElement('span');
    node.classList.add('square');
    node.style.width = `calc(100% / ${cells})`;
    node.style.height = `calc(100% / ${cells})`;
    span.append(num);
    node.append(span);
    return node;
}