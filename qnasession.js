const read = require('readline')

const rl = read.createInterface({input: process.stdin , output : process.stdout})

const num1 = Math.floor((Math.random()*10)+1)
const num2 = Math.floor((Math.random()*10)+1)

const answer = num1 * num2

rl.question(`What should be the correct result of ${num1} * ${num2}? \n`,(userInput)=>{
    if(userInput.trim() == answer){
        console.log("Right answer! Goodbye")
        rl.close()
    }else{
        rl.setPrompt(`Your answer "${userInput}" is incorrect! Please try again \n`)
        rl.prompt()
        rl.on('line',(userInput)=>{
            if(userInput.trim() == answer){
                console.log("Right answer! Goodbye")
                rl.close()
            }else{
                rl.setPrompt(`Your answer "${userInput}" is again wrong! Please input right value! \n`)
                rl.prompt()
            }
        });
    }
});
