export const questions = [
    {
        id: 1,
        question: "Write a JavaScript code for adding new elements dynamically ?",
        answer: `<!DOCTYPE html>
        <html>
        
        <head>
            <title>
                JavaScript code for adding new
                elements dynamically
            </title>
        </head>
        
        <body>
            <button onclick="create()">
                Click Here!
            </button>
            
            <script>
                function create() {
                    var geeks = document.createElement('geeks');
                    geeks.textContent = "Geeksforgeeks";
                    geeks.setAttribute('class', 'note');
                    document.body.appendChild(geeks);
                }
            </script>
        </body>
        
        </html>
        `
    }
    , {
        id: 2,
        question: "What are global variables? How are these variable declared and what are the problems associated with them ?",
        answer: `var petName = "Rocky"; //Global Variable
        myFunction();
        
        function myFunction() {
            document.getElementById("geeks").innerHTML
                        = typeof petName + "- " +
                        "My pet name is " + petName;
        }
        
        document.getElementById("Geeks").innerHTML
                        = typeof petName + "- " +
                        "My pet name is " + petName;
    `
    }
    , {
        id: 3,
        question: "What are global variables? How are these variable declared and what are the problems associated with them ?What are global variables? How are these variable declared and what are the problems associated with them ?",
        answer: ""
    }
    , {
        id: 4,
        question: "",
        answer: ""
    }
    , {
        id: 5,
        question: "",
        answer: ""
    }
    , {
        id: 6,
        question: "",
        answer: ""
    }
    , {
        id: 7,
        question: "",
        answer: ""
    }
    , {
        id: 8,
        question: "",
        answer: ""
    }
]