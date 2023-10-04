//desenhar quadro

function drawBoard(){
    for (let currentRow = 0; currentRow< ROW; currentRow++){
        for(let currentCol = 0; currentCol < COL; currentCol++){
            const currentSquareColor = board[currentRow][currentCol];
           drawSquare(currentRow, currentCol, currentSquareColor);
        }
    }
}

//pintar um quadrado no eixo x e y em determinda cor
function drawSquare(y, x, color){
ctx.fillStyle =  color;
ctx.fillRect(x * SQ, y * SQ, SQ, SQ);


//se a cor for cor normal pintar tbm a borda
if(color ==defaultColor){
    ctx.strokeStyle = defaultBorder;
}
//posição x e y multiplicado pelo tanto de pixel
ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);
}
//cria uma peça aleatoria puxando do array
function randomPiece(){
const ramdomPieceNumber = Math.floor(Math.random() *PIECES.length);// criando peça aleatória
return new Piece(
    PIECES[ramdomPieceNumber][0],//peça
    PIECES[ramdomPieceNumber][1],//cor
);
}

//função para queda do objeto
function drop(){
    const now = Date.now();
    const delta = now - dropStart;

    if (delta > speed){
        piece.moveDown();
        dropStart = Date.now();
    }
requestAnimationFrame(drop);
}