/*
Every email consist of a local name and a domain name [localName]@[domainName]

Beside lowercase, email can contain '.' and '+'

If we add '.' in the name mail will be send without the dots in name ie. "alice.z@leetcode.com" => "alicez@leetcode.com" (rule does not apply for domain name)
If we add '+' to the local name, everything after the + side will be ignored m.y+name@email.com will be forwarded to my@email.com (rule does not apply to domain)

Given a list of emails, we want to send email to each addresses to the list, how many will receive email?

Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails

*/
/*
Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails? 

    RULES TO CONSIDER:
        1) periods are ignored: ken.ny@gmail.com => kenny@gmail.com
        2) everything after + are ignored: ken+ny@gmail.com => ken@gmail.com 
            It is possible for both of these at the same time:
                ken.ny+zack@gmail.com => kenny@gmail.com
        3) Can contain lowercase and uppdercase
        4) Email consists of local name + domain names
        
        Input: receives an array of email addresses
        Output: An integer indicating how many different addresses received an email
        
        Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
        Expectation: 2
        
        Need: 
        
        a counter to store how many different emails were sent
        
        Need to visit all of the email
            have a switch that let me know if a + sign was found
            have a switch to let me know if an @ sign was reach
            have a temporary storage string and convert the email address to conform to the rules
                if there is a period: ignore it
                if the + sign was found and the @ was not reach: ignore it
                if the @ sign was reach: add it in
                
                
                store it in the object if it does not exist
        
        loop through my storage object and count how many are there
        
        return that number
*/
var numUniqueEmails = function(emails) {
  let storage = {};
  
  //loop through the list of emails
  for (let i = 0; i < emails.length; i++) {

    let domain = emails[i].split("@");
    let periods = domain[0].split('.').join('');
    //join first, split by the plusses, ignore plusses
    let split = periods.split('+');
    //join the last position for my domain array with the first position in my split array

    const value = split[0] + '@' + domain[domain.length-1];
    if (storage[value] === undefined) {
      storage[value] = 1;
    }
  }
  
  return Object.keys(storage).length;
};