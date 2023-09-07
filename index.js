#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
let playerName;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow('Who Wants To Be A JavaScript Millionaire? \n');
    await sleep();
    rainbowTitle.stop();
    console.log(`
    ${chalk.bgBlue('HOW TO PLAY')} 
    Its your exam of CIT MS word, MS Excel, Computer basic.
    If you get any question wrong your marks will be ${chalk.bgRed('deducted')}
    So get all the questions right...

  `);
}
let playerScore = 0;
async function handleAnswer(isCorrect) {
    if (isCorrect) {
        playerScore++; // Increase the player's score for a correct answer
    }
}
async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default() {
            return 'Player';
        },
    });
    playerName = answers.player_name;
}
function winner() {
    console.clear();
    console.log(`Your final score: ${playerScore} / 25`); // Display the player's final score
    if (playerScore > 20) {
        figlet(`Congrats , ${playerName} !\n DONE BASIC COMPUTER EXAM`, (err, data) => console.log(gradient.pastel.multiline(data) + '\n'));
    }
    else {
        console.log('You are fail in basic computer Exam!');
    }
    ;
    process.exit(0);
}
async function question1() {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: '_______ transforms one interface into another interface\n',
        choices: [
            'Program',
            'software',
            'data',
            'none',
        ],
    });
    return;
    handleAnswer(answers.question_1 === 'software');
}
async function question2() {
    const answers = await inquirer.prompt({
        name: 'question_2',
        type: 'list',
        message: 'what is the full form of CRT \n',
        choices: ['current ray tube', 'current ray technology', 'cathode ray tube', 'cathode ray technology'],
    });
    return handleAnswer(answers.question_2 === 'cathode ray tube');
}
async function question3() {
    const answers = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: `Programs stored in ROM are called __________.\n`,
        choices: ['hardware', 'firmware', 'software', 'none of these'],
    });
    return handleAnswer(answers.question_3 === 'firmware');
}
async function question4() {
    const answers = await inquirer.prompt({
        name: 'question_4',
        type: 'list',
        message: 'what is the name of series of laptop computers manufactured by IBM called?\n',
        choices: [
            'lapPad',
            'thinkpad',
            'aptiva',
            'notepad', // Correct
        ],
    });
    return handleAnswer(answers.question_4 === 'thinkpad');
}
async function question5() {
    const answers = await inquirer.prompt({
        name: 'question_5',
        type: 'list',
        message: 'In a high resolution mode, the number of dots in a line will usually be\n',
        choices: ['320', '640', '760', '900'],
    });
    return handleAnswer(answers.question_5 === '640');
}
async function question6() {
    const answers = await inquirer.prompt({
        name: 'question_6',
        type: 'list',
        message: 'MOS stands for ___________.\n',
        choices: ['metal oxide semiconductor', 'most often store', 'method organized stack', 'none of these'],
    });
    return handleAnswer(answers.question_6 === 'mental oxide semiconductor');
}
async function question7() {
    const answers = await inquirer.prompt({
        name: 'question_7',
        type: 'list',
        message: 'which storage device is mounted on reels?\n',
        choices: ['floppy disk', 'hard disk', 'magnetic tapes', 'CDROMS'],
    });
    return handleAnswer(answers.question_7 === 'magnetic tapes');
}
async function question8() {
    const answers = await inquirer.prompt({
        name: 'question_8',
        type: 'list',
        message: 'the analytical engine developed during first generation of computers used ____________ as a memory unit.\n',
        choices: ['Ram', 'floppies', 'cards', 'counter wheels'],
    });
    return handleAnswer(answers.question_8 === 'counter wheels');
}
async function question9() {
    const answers = await inquirer.prompt({
        name: 'question_9',
        type: 'list',
        message: 'which of the following companies is a leader in manufacture of hard disk drives.\n',
        choices: ['samsung', 'IBM', 'fujitsu', 'seagate'],
    });
    return handleAnswer(answers.question_9 === 'seagate');
}
async function question10() {
    const answers = await inquirer.prompt({
        name: 'question_10',
        type: 'list',
        message: 'which of the memories below is often used in a typical computer operation?\n',
        choices: ['RAM', 'ROM', 'FDD', 'HDD'],
    });
    return handleAnswer(answers.question_10 === 'RAM');
}
async function question11() {
    const answers = await inquirer.prompt({
        name: 'question_11',
        type: 'list',
        message: 'VIRUS stands for \n',
        choices: ['very important resourse under search', 'virtual information resourse under seize', 'verify interchange result until source', 'very important record user searched'],
    });
    return handleAnswer(answers.question_11 === 'virtual information resourse under seize');
}
async function question12() {
    const answers = await inquirer.prompt({
        name: 'question_12',
        type: 'list',
        message: 'which of the following program is not a utility?\n',
        choices: ['debugger', 'editor', 'spooler', 'all of the above'],
    });
    return handleAnswer(answers.question_12 === 'spooler');
}
async function question13() {
    const answers = await inquirer.prompt({
        name: 'question_13',
        type: 'list',
        message: 'poor response times are usually caused by\n',
        choices: ['process busy', 'high i/o rates', 'high paging rates', 'any of the above'],
    });
    return handleAnswer(answers.question_13 === 'any of the above');
}
async function question14() {
    const answers = await inquirer.prompt({
        name: 'question_14',
        type: 'list',
        message: 'which periphiral manufacture qoutes "empowering you PC"\n',
        choices: ['canon', 'epson', 'mercury', 'samsung'],
    });
    return handleAnswer(answers.question_14 === 'mercury');
}
async function question15() {
    const answers = await inquirer.prompt({
        name: 'question_15',
        type: 'list',
        message: 'the processing of an application takes place between a client and a _______ processor.\n',
        choices: ['Front end', 'back end', 'both A and B', 'none of the above'],
    });
    return handleAnswer(answers.question_15 === 'both A and B');
}
async function question16() {
    const answers = await inquirer.prompt({
        name: 'question_16',
        type: 'list',
        message: 'which of the following device can store large amounts of data\n',
        choices: ['floppy disk', 'hard disk', 'cdROM', 'zip disk'],
    });
    return handleAnswer(answers.question_16 === 'hard disk');
}
async function question17() {
    const answers = await inquirer.prompt({
        name: 'question_17',
        type: 'list',
        message: 'floppy disk drive originally designed by\n',
        choices: ['IBM', 'sony', 'panasonic', 'samsung'],
    });
    return handleAnswer(answers.question_17 === 'sony');
}
async function question18() {
    const answers = await inquirer.prompt({
        name: 'question_18',
        type: 'list',
        message: 'which technology is used in a CDROM Drive?\n',
        choices: ['mechanical', 'electromechanical', 'optical', 'fiber optical'],
    });
    return handleAnswer(answers.question_18 === 'optical');
}
async function question19() {
    const answers = await inquirer.prompt({
        name: 'question_19',
        type: 'list',
        message: 'data (information) is stored in computer as\n',
        choices: ['files', 'directories', 'floppies', 'matter'],
    });
    return handleAnswer(answers.question_19 === 'files');
}
async function question20() {
    const answers = await inquirer.prompt({
        name: 'question_20',
        type: 'list',
        message: 'nortal is a company which manufactures\n',
        choices: ['software', 'processors', 'cables', 'network equipment'],
    });
    return handleAnswer(answers.question_20 === 'network equipment');
}
async function question21() {
    const answers = await inquirer.prompt({
        name: 'question_21',
        type: 'list',
        message: 'what is the name of the 64-bit microprocessor developed by AMD?\n',
        choices: ['opteron', 'RISC-9000', 'iMAc', 'athlon'],
    });
    return handleAnswer(answers.question_21 === 'opteron');
}
async function question22() {
    const answers = await inquirer.prompt({
        name: 'question_22',
        type: 'list',
        message: 'a source program is: \n',
        choices: ['a program written in a machine language', 'a program to be translated into machine language', 'a machine language translation of program written in a', 'none of these'],
    });
    return handleAnswer(answers.question_22 === 'a program to be translated into machine language');
}
async function question23() {
    const answers = await inquirer.prompt({
        name: 'question_23',
        type: 'list',
        message: 'IC are classified on the basis of:\n',
        choices: ['manufacturing company', 'type of computer', 'number of transistors', 'none of these'],
    });
    return handleAnswer(answers.question_23 === 'number of transisters');
}
async function question24() {
    const answers = await inquirer.prompt({
        name: 'question_24',
        type: 'list',
        message: 'the purpose of microprocessor is to control _________\n',
        choices: ['memory', 'switcher', 'processing', 'tasks'],
    });
    return handleAnswer(answers.question_24 === 'memory');
}
async function question25() {
    const answers = await inquirer.prompt({
        name: 'question_25',
        type: 'list',
        message: 'a microprocessor is a ______ chip integrating all the functions of a CPU of a computer.\n',
        choices: ['multiple', 'single', 'double', 'triple'],
    });
    return handleAnswer(answers.question_25 === 'single');
}
// Run it with top-level await
console.clear();
await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
await question6();
await question7();
await question8();
await question9();
await question10();
await question11();
await question12();
await question13();
await question14();
await question15();
await question16();
await question17();
await question18();
await question19();
await question20();
await question21();
await question22();
await question23();
await question24();
await question25();
winner();
