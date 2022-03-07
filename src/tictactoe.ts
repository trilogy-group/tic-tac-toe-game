import * as readline from 'readline';
import { stdin, stdout } from 'process';

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

export let grid: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let turn: number = 9;
let status: number = 0;


export const num = {
    "1": 0,
    "2": 1,
    "3": 2,
    "4": 3,
    "5": 4,
    "6": 5,
    "7": 6,
    "8": 7,
    "9": 8,
}

export function validNumber(move: string): boolean{
    if(move == "1" || move == "2" || move == "3" || move == "4" || move == "5" || move == "6" || move == "7" || move == "8" || move == "9"){
        if(grid[num[move]]=="X" || grid[num[move]]=="O")
        return false;
        else
        return true;
    }
    return false;
}

export function getlineone(grid: string[]):string{
    return `${grid[0]}|${grid[1]}|${grid[2]}`;
}
export function getlinetwo(grid: string[]):string{
    return `${grid[3]}|${grid[4]}|${grid[5]}`;
}
export function getlinethree(grid:string[]):string{
    return `${grid[6]}|${grid[7]}|${grid[8]}`;
}

function tictactoe(move: string): void{
    if(turn%2==1){
        grid[num[move]] = "X";
    }
    else{
        grid[num[move]] = "O";
    }
}

let grid1: string = getlineone(grid);
let grid2: string = getlinetwo(grid);
let grid3: string = getlinethree(grid);
let pn: number = 1;
let ps: string = "1";

export function checkStatus(): void{
    if(grid[0]==grid[1] && grid[2]==grid[1]){
        if(grid[0]=="X")
        status = 1;
        else
        status = 2;
        turn = 0;
    }
    if(grid[3]==grid[4] && grid[4]==grid[5]){
        if(grid[3]=="X")
        status = 1;
        else
        status = 2;
        turn = 0;
    }
    if(grid[6]==grid[7] && grid[7]==grid[8]){
        if(grid[6]=="X")
        status = 1;
        else
        status = 2;
        turn = 0;
    }
    if(grid[0]==grid[3] && grid[3]==grid[6]){
        if(grid[0]=="X")
        status = 1;
        else
        status = 2;
        turn = 0;
    }
    if(grid[4]==grid[1] && grid[7]==grid[1]){
        if(grid[1]=="X")
        status = 1;
        else
        status = 2;
        turn = 0;
    }
    if(grid[5]==grid[8] && grid[2]==grid[5]){
        if(grid[5]=="X")
        status = 1;
        else
        status = 2;
        turn = 0;
    }
    if(grid[0]==grid[4] && grid[4]==grid[8]){
        if(grid[0]=="X")
        status = 1;
        else
        status = 2;
        turn = 0;
    }
    if(grid[4]==grid[6] && grid[2]==grid[4]){
        if(grid[4]=="X")
        status = 1;
        else
        status = 2;
        turn = 0;
    }
}


export function runGame():void{
    grid1 = getlineone(grid);
    grid2 = getlinetwo(grid);
    grid3 = getlinethree(grid);
    pn = turn%2;
    if(pn==0)
    ps = "2";
    else
    ps = "1";
    rl.question(grid1+"\n"+grid2+"\n"+grid3+"\nPlayer "+ps+",Choose Position to play\n", (answer: string) => {
        if(validNumber(answer)){
            tictactoe(answer);
            turn-=1;
            checkStatus();
        }
        else{
        console.log("\nInput is wrong or taken\n\n");
        }
        if(turn>0)
        runGame();
        else{
            grid1 = getlineone(grid);
            grid2 = getlinetwo(grid);
            grid3 = getlinethree(grid);
            if(status==0)
            console.log(grid1+"\n"+grid2+"\n"+grid3+"\nGame Drawn\n");
            else
            console.log(grid1+"\n"+grid2+"\n"+grid3+"\nPlayer "+status+" Won\n");
            rl.close();
        }
    });
}


runGame();


