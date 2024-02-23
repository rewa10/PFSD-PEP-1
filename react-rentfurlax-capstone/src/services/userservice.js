export let success = "SUCCESS";
export let failure = "FAILURE";

export async function validateUser(username, password)
{
    let response = await  fetch("http://44.203.179.224:8000/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
    let message = await response.json();
    console.log(message);
    if(message['message'] === 'success')
        return Promise.resolve(success)
    
    return Promise.reject(failure)
}

export async function registerUser(data)
{
    let response = await fetch("http://44.203.179.224:8000/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    let resp = await response.text()
    //console.log(resp);
    return resp;
}
export function isUserLoggedIn()
{
    return sessionStorage.getItem('user') !== null
   
}
export function logout()
{
    sessionStorage.removeItem('user')
}
