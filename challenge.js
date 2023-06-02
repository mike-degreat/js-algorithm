/*//Challenge 1:
function palindrome(str) {
    // Step 1: Remove non-alphanumeric characters and convert to lowercase
    const modifiedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Step 2: Create a reversed version of the modified string
   const reversedStr = modifiedStr.split('').reverse().join('');

   // Step 3: Check if the modified string is equal to its reversed version
   return modifiedStr === reversedStr;
 }
 
 palindrome("eye");

console.log(palindrome("eye")); // true
console.log(palindrome("_eye")); // true
console.log(palindrome("race car")); // true
console.log(palindrome("not a palindrome")); // false
console.log(palindrome("A man, a plan, a canal. Panama")); // true
console.log(palindrome("never odd or even")); // true
console.log(palindrome("nope")); // false
console.log(palindrome("almostomla")); // false
console.log(palindrome("My age is 0, 0 si ega ym.")); // true
console.log(palindrome("1 eye for of 1 eye.")); // false
console.log(palindrome("0_0 (: /-\ :) 0-0")); // true
console.log(palindrome("five|\\_/|four")); // false
*/

//Challenge 2:
function convertToRoman(num) {
    const romanSymbols = [
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' }
    ];
  
    let romanNumeral = '';
  
    for (let i = 0; i < romanSymbols.length; i++) {
      while (num >= romanSymbols[i].value) {
        romanNumeral += romanSymbols[i].symbol;
        num -= romanSymbols[i].value;
      }
    }
  
    return romanNumeral;
  }
  
  const testCases = [2, 4, 5, 9, 12, 16, 29, 44, 45, 68, 83, 97, 99, 400, 500, 501, 649, 798, 891]; /* output:
  Input: 2 | Result: II
  Input: 4 | Result: IV
  Input: 5 | Result: V
  Input: 9 | Result: IX
  Input: 12 | Result: XII
  Input: 16 | Result: XVI
  Input: 29 | Result: XXIX
  Input: 44 | Result: XLIV
  Input: 45 | Result: XLV
  Input: 68 | Result: LXVIII
  Input: 83 | Result: LXXXIII
  Input: 97 | Result: XCVII
  Input: 99 | Result: XCIX
  Input: 400 | Result: CD
  Input: 500 | Result: D
  Input: 501 | Result: DI
  Input: 649 | Result: DCXLIX
  Input: 798 | Result: DCCXCVIII
  Input: 891 | Result: DCCCXCI*/ 
  
  for (const num of testCases) {
    const result = convertToRoman(num);
    console.log(`Input: ${num} | Result: ${result}`);
  }

//challenge 3:
function rot13(str) {
    // Create an array to store the decoded characters
    let decoded = [];
  
    // Iterate over each character in the input string
    for (let i = 0; i < str.length; i++) {
      // Get the character code of the current character
      const charCode = str.charCodeAt(i);
  
      // Check if the character is a letter (A-Z)
      if (charCode >= 65 && charCode <= 90) {
        // Apply the ROT13 transformation by adding 13 to the character code
        let decodedCharCode = charCode + 13;
  
        // Wrap around if the character code exceeds 'Z'
        if (decodedCharCode > 90) {
          decodedCharCode = decodedCharCode - 26;
        }
  
        // Convert the decoded character code back to a character
        const decodedChar = String.fromCharCode(decodedCharCode);
  
        // Push the decoded character to the decoded array
        decoded.push(decodedChar);
      } else {
        // For non-alphabetic characters, pass them on as is
        decoded.push(str[i]);
      }
    }
  
    // Join the decoded characters into a string and return
    return decoded.join('');
  }
  
  console.log(rot13("SERR PBQR PNZC")); // Output: FREE CODE CAMP
  console.log(rot13("SERR CVMMN!")); // Output: FREE PIZZA!
  console.log(rot13("SERR YBIR?")); // Output: FREE LOVE?
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // Output: THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
  
  //challenge 4:
  function telephoneCheck(str) {
    // Regular expression pattern for valid US phone number formats
    const pattern = /^(1\s?)?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/;
  
    // Test if the input string matches the pattern
    return pattern.test(str);
  }
  
  // Test cases
  console.log(telephoneCheck("555-555-5555")); // Should return true
  console.log(telephoneCheck("1 555-555-5555")); // Should return true
  console.log(telephoneCheck("1 (555) 555-5555")); // Should return true
  console.log(telephoneCheck("5555555555")); // Should return true
  console.log(telephoneCheck("555-555-5555")); // Should return true
  console.log(telephoneCheck("(555)555-5555")); // Should return true
  console.log(telephoneCheck("1(555)555-5555")); // Should return true
  console.log(telephoneCheck("555-5555")); // Should return false
  console.log(telephoneCheck("5555555")); // Should return false
  console.log(telephoneCheck("1 555)555-5555")); // Should return false
  console.log(telephoneCheck("1 555 555 5555")); // Should return true
  console.log(telephoneCheck("1 456 789 4444")); // Should return true
  console.log(telephoneCheck("123**&!!asdf#")); // Should return false
  console.log(telephoneCheck("55555555")); // Should return false
  console.log(telephoneCheck("(6054756961)")); // Should return false
  console.log(telephoneCheck("2 (757) 622-7382")); // Should return false
  console.log(telephoneCheck("0 (757) 622-7382")); // Should return false
  console.log(telephoneCheck("-1 (757) 622-7382")); // Should return false
  console.log(telephoneCheck("2 757 622-7382")); // Should return false
  console.log(telephoneCheck("10 (757) 622-7382")); // Should return false
  console.log(telephoneCheck("27576227382")); // Should return false
  console.log(telephoneCheck("(275)76227382")); // Should return false
  console.log(telephoneCheck("2(757)6227382")); // Should return false
  console.log(telephoneCheck("2(757)622-7382")); // Should return false
  console.log(telephoneCheck("555)-555-5555")); // Should return false
  console.log(telephoneCheck("(555-555-5555")); // Should return false
  console.log(telephoneCheck("(555)5(55?)-5555")); // Should return false
  console.log(telephoneCheck("55 55-55-555-5")); // Should return false
  console.log(telephoneCheck("11 555-555-5555")); // Should return false
  console.log(telephoneCheck("1 (555) 555-5555")); // Should return true
  
//chanllenge 5:
function checkCashRegister(price, cash, cid) {
    let change = cash - price; // Calculate the amount of change required
    let result = { status: "", change: [] }; // Initialize the result object

    // Calculate the total cash in the drawer (CID)
    let totalCID = cid.reduce((total, [_, amount]) => total + amount, 0);
    totalCID = parseFloat(totalCID.toFixed(2));

    // Check if there is insufficient funds in the drawer
    if (totalCID < change) {
      result.status = "INSUFFICIENT_FUNDS";
    }
    // Check if the change is exactly equal to the total cash in the drawer 
    else if (totalCID === change) {
      result.status = "CLOSED";
      result.change = cid;
    }
    // Calculate the change using available currency units 
    else {
      result.status = "OPEN";

      // Define the available currency units in descending order
      const currencyUnits = [
        ["ONE HUNDRED", 100],
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE", 5],
        ["ONE", 1],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01]
      ];
  
      // Iterate through the currency units and calculate the change
      for (let [currencyUnit, unitValue] of currencyUnits) {
        let unitsToReturn = 0;

        // Keep deducting the currency unit from the change until it's not possible or no more units available
        while (change >= unitValue && cid[currencyUnitIndex(cid, currencyUnit)][1] > 0) {
          change -= unitValue;
          change = parseFloat(change.toFixed(2));
          cid[currencyUnitIndex(cid, currencyUnit)][1] -= unitValue;
          unitsToReturn++;
        }
        
        // Add the returned units to the result
        if (unitsToReturn > 0) {
          result.change.push([currencyUnit, unitsToReturn * unitValue]);
        }
      }
      
       // Check if there is still change remaining, indicating insufficient funds
      if (change > 0) {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
      }
    }
  
    return result; // Return the result object
  }
  
  // Helper function to find the index of a currency unit in the CID array 
  function currencyUnitIndex(cid, currencyUnit) {
    for (let i = 0; i < cid.length; i++) {
      if (cid[i][0] === currencyUnit) {
        return i;
      }
    }
    return -1; // Return -1 if currency unit is not found
  }
  
  // Test cases
  console.log(
    checkCashRegister(
      19.5,
      20,
      [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100],
      ]
    )
  );
  console.log(
    checkCashRegister(
      3.26,
      100,
      [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100],
      ]
    )
  );
  console.log(
    checkCashRegister(
      19.5,
      20,
      [
        ["PENNY", 0.01],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
      ]
  

  
    )
    
)