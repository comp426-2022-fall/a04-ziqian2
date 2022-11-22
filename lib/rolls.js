export function roll(sides, dice, rolls){
    var result = []

    for(let i = 0; i < rolls; i++){
        let k = 0;
        for(let j = 0; j < dice; j++){
            k = k + Math.floor(Math.random() * sides) + 1;
        }
        result.push(k);
    }

    const answer = {"sides": sides, "dice": dice, "rolls": rolls, "result": result};

    return answer;
}