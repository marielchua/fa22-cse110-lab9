window.addEventListener('DOMContentLoaded', init);

function init(){
    window.TrackJS && TrackJS.install({ 
        token: "2afcfe206b9c4bb3b0df342d53bab431"
        // for more configuration options, see https://docs.trackjs.com
      });

    //transferred from index.html
    let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    });

    //Commented this out to cause an error for the try-catch block
    //let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

    //console.log demo
    const logBtn = document.querySelector('#console-log');
    logBtn.onclick = function(){
        console.log('Console Log Demo');
    };

    //console.error demo
    const errBtn = document.querySelector('#console-error');
    errBtn.onclick = function(){
        console.error('Console Error Demo');
    };

    //console.count demo
    const countBtn = document.querySelector('#console-count');
    countBtn.onclick = function(){
        console.count('Console Count Demo');
    };

    //console.warn demo
    const warnBtn = document.querySelector('#console-warn');
    warnBtn.onclick = function(){
        console.warn('Console Warn Demo');
    };

    //console.assert demo
    const assertBtn = document.querySelector('#console-assert');
    assertBtn.onclick = function(){
        const x = 3;
        const y = 2;
        const reason = 'x is not less than y'
        console.assert(x < y, {x, y, reason});
    };

    //console.clear demo
    const clearBtn = document.querySelector('#console-clear');
    clearBtn.onclick = function(){
        console.clear();
    }

    //console.dir demo
    const dirBtn = document.querySelector('#console-dir');
    dirBtn.onclick = function(){
        console.dir(dirBtn);
    };

    //console.dirxml demo
    const dirxmlBtn = document.querySelector('#console-dirxml');
    dirxmlBtn.onclick = function(){
        console.dirxml(dirxmlBtn);
    };

    //console.group demo
    const groupBtn = document.querySelector('#console-group-start');
    groupBtn.onclick = function(){
        console.group('Console Group');
    };

    //console.groupEnd demo
    const groupEndBtn = document.querySelector('#console-group-end');
    groupEndBtn.onclick = function(){
        console.groupEnd('Console Group');
    };

    //console.table demo
    const tableBtn = document.querySelector('#console-table');
    tableBtn.onclick = function(){
        var table = [
            {
                course: 'CSE110',
                grade: 'A-',            
            },
            {
                course: 'CSE167',
                grade: 'A',
            },
            {
                course: 'COGS108',
                grade: 'B',
            }
        ];
        console.table(table);
    };

    //console.time demo
    const startTimeBtn = document.querySelector('#console-start-timer');
    startTimeBtn.onclick = function(){
        console.time();
    };

    //console.timeEnd demo
    const endTimeBtn = document.querySelector('#console-end-timer');
    endTimeBtn.onclick = function(){
        console.timeEnd();
    };

    //console.trace demo
    const traceBtn = document.querySelector('#console-trace');
    traceBtn.onclick = function(){
        const deep = () => { deeper(); };
        const deeper = () => { deepest(); };
        const deepest = () => { deepestest(); };
        const deepestest = () => { console.trace(); };
        deep();
    };

    //Triggering a global error demo
    const globalErrBtn = document.querySelector('#console-global-error');
    globalErrBtn.onclick = function(){
        window.onerror = () => {
            console.log('OH NOOOO, an error occurred.');
        };
        exampleGlobalError();
    };

    //function to trigger an example global error
    function exampleGlobalError(){
        thisIsNotDefined();
    }

    //trying out custom errors and extending Error
    class LogError extends Error {
        constructor(message) {
          super(message); // (1)
          this.name = "LogError"; // (2)
        }
    }
    
    //trying out try-catch blocks
    try{
        /*should cause error since declaration and initialization for
        errorBtns is commented out*/
        console.log(errorBtns);
    }catch(err){
        throw new LogError('Was not able to log the array of error buttons (example try/catch/throw & custom error)');
    }finally{
        console.log('Expected array should be array of error buttons (example try/catch/finally)');
    }

    //trying out TrackJS! should see this error in TrackJS records
    TrackJS.track('Testing TrackJS!');
}
