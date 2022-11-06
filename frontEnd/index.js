const XhttpRequest = require('./xhttprequest');
const form = document.querySelector('form');

form.addEventListener('submit', e=>{
    // e.preventDefault();
    getData(e.target)

});

function getData(formI){
    const inputs = formI.querySelectorAll('input,textarea');
    
    inputs.forEach(fields => {
        if(fields.name == 'foto'){
            ConvertToBase64(fields, inputs)
        }
    });
}

function ConvertToBase64(foto, inputs){
    const photo = foto.files;

    if(photo.length > 0){
        const file = new FileReader();

        file.onload = async function(e){
          teste(e.target.result, inputs)
        }

      file.readAsDataURL(photo[0]);

    }
}
function teste(a, inputs){
    let user = {};
    inputs.forEach(fields => {
        if(fields.name == 'foto'){
            user[fields.name] = a;
        }else{
            user[fields.name] = fields.value; 
        }
    });
XhttpRequest.Post('/add',user)
}