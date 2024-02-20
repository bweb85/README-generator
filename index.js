const fs = require("fs");
const path = require('path'); 
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown"); 

// function to initialize program
function init() {
    inquirer
    .prompt([{
        // questions for readme
        type: 'input',
        name: 'title',
        message: 'What is the name of your repo?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe what your repo does',
      },
      {
        type: 'input',
        name: 'install',
        message: 'What packages are needed to run your repo?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How can users use your repo?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Do you have a license for your repo?',
        choices: [`MIT`, `Apache`, `BSD`, `Boost`],
      },
      {
        type: 'input',
        name: 'year',
        message: 'What year is the copyright? Format YYYY',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of person who holds the copyright? ',
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Who has contributed to your repo? Include links to their github profiles',
      },
      {
        type: 'input',
        name: 'creator',
        message: 'Add your github profile link',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Are there any tests for your application? Do you have code examples for how they run? ',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Who should users contact and how should they contact them if they have questions? Include email',
      }])
    .then ((answers => {
        // create README file to output folder
        const badge = renderBadge(answers.license);
        const boilerplate = renderBoilerplate(answers.license);
        const template = generateMarkdown ({...answers, badge, boilerplate});
        fs.writeFile(`./output/README.md`, template, (err) => { 
            if(err){
                throw err
            }
        console.log(`Success! README.md generated in output folder. Make sure to check file and update license with your name and the year`)
        })
    })); 

// function to render license badge
    function renderBadge (license) {
        let badge = ``
        if (license === `MIT`) {
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        } else if (license === `Apache`) {
            badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        } else if (license === `BSD`) {
            badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        } else if (license === `Boost`) {
            badge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
        } else {
            badge = ``
        }
        return badge;
}}

// 
    function renderBoilerplate (license) {
        let boilerplate = ``
        if (license === `MIT`) {
            boilerplate = 
            `Permission is hereby granted, free of charge, to any person obtaining a copy of
            this software and associated documentation files (the "Software"), to deal in
            the Software without restriction, including without limitation the rights to
            use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
            of the Software, and to permit persons to whom the Software is furnished to do
            so, subject to the following conditions:
            
            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.
            
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.`;
        } else if (license === `Apache`) {
            boilerplate = 
            `Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at
        
              [Apache](http://www.apache.org/licenses/LICENSE-2.0)
        
            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.`;
    } else if (license === `BSD`) {
        boilerplate = 
        `Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

        Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
        Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
        THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
        
        The views and conclusions contained in the software and documentation are those of the authors and should not be interpreted as representing official policies, either expressed or implied, of the FreeBSD Project.`;
    } else if (license === `Boost`) {
        boilerplate = 
        clear`Permission is hereby granted, free of charge, to any person or organization
        obtaining a copy of the software and accompanying documentation covered by
        this license (the "Software") to use, reproduce, display, distribute,
        execute, and transmit the Software, and to prepare derivative works of the
        Software, and to permit third-parties to whom the Software is furnished to
        do so, all subject to the following:
        
        The copyright notices in the Software and this entire statement, including
        the above license grant, this restriction and the following disclaimer,
        must be included in all copies of the Software, in whole or in part, and
        all derivative works of the Software, unless such copies or derivative
        works are solely in the form of machine-executable object code generated by
        a source language processor.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT
        SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE
        FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE,
        ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
        DEALINGS IN THE SOFTWARE.`;
    } else {
        boilerplate = ``
    }
    return boilerplate;
}

// function call to initialize program
init();