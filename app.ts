
import inquirer from 'inquirer';
import { exec } from 'child_process';

const menuOptions = [
    {
        name: 'Ejecutar CHALLENGE_01',
        value: 'run_challenge_01',
    },
    {
        name: 'Salir',
        value: 'exit',
    },
] as const;

const menuQuestions = [
    {
        type: 'list',
        name: 'menuOption',
        message: 'Seleccione una opción:',
        choices: menuOptions,
    },
] as const;

const options = {
    "run_challenge_01": "cd dist/CHALLENGE_01 && node solution.js",
}

inquirer.prompt(menuQuestions).then((answers) => {

    const option = options[answers.menuOption] || null;

    if (!option) {
        console.log('Saliendo del menú...')
        return;
    };

    exec(option, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error: ${stderr}`);
            return;
        }
        console.log(`Resultado: ${stdout}`);
    });

});
