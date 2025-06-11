/* characters */
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j",
    "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", 
    "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
    "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const noSymbols = characters.slice(0, 62); 
const noNumbersAndSymbols = characters.slice(0, 52); 
const noNumbers = [...characters];
noNumbers.splice(52, 10);

/* DOM */ 
const slider = document.getElementById("myRange");
const passwordLengthDisplay = document.getElementById("passwordLength");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");

/* generate a password */
function generatePassword()
{
    password1.textContent = "";
    password2.textContent = "";

    const passwordLength = slider.value;

    /* w/ numbers and symbols */
    if (includeNumbers.checked && includeSymbols.checked) 
    {
        for (let i = 0; i < passwordLength; i += 1)
        {
            password1.textContent += generateCharacter(characters);
            password2.textContent += generateCharacter(characters);
        }
    }
    /* w/o symbols */
    else if (includeNumbers.checked && !includeSymbols.checked) 
    {   
        for (let i = 0; i < passwordLength; i += 1)
        {
            password1.textContent += generateCharacter(noSymbols);
            password2.textContent += generateCharacter(noSymbols);
        }
    }
    /* w/o numbers */
    else if (!includeNumbers.checked && includeSymbols.checked) 
    {  
        for (let i = 0; i < passwordLength; i += 1)
        {
            password1.textContent += generateCharacter(noNumbers);
            password2.textContent += generateCharacter(noNumbers);
        }
    }
    /* w/o numbers and symbols */
    else 
    {
        for (let i = 0; i < passwordLength; i += 1)
        {
            password1.textContent += generateCharacter(noNumbersAndSymbols);
            password2.textContent += generateCharacter(noNumbersAndSymbols);
        }
    }   
}

/* generate a character */
function generateCharacter(index) 
{
    const randomIndex = Math.floor(Math.random() * index.length);
    return index[randomIndex];
}

/* slider <p> length display*/
slider.oninput = function() 
{
    passwordLengthDisplay.textContent = this.value;
}
passwordLengthDisplay.textContent = slider.value;



/*ADD COPY TEXT BUTTON */ 