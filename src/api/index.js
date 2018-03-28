export const fetchForm= async (email,pass)=> {
    console.log(`email: ${email}, password: ${pass}`) //для api пригодится
    const response = await fetch('http://www.mocky.io/v2/5abbf4962d00004a009bdf92');
    return await response.json();
}


