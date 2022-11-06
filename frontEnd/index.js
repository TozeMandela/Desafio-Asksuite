const XhttpRequest = require('./xhttprequest');
const inputfile = document.querySelector('input[type=file]');



inputfile.addEventListener('change', e=>{
    // e.preventDefault();
    ConvertToBase64(e.target);
    console.log(inputfile.value);
    // ()

});

function ConvertToBase64(foto){
    const photo = foto.files;

    if(photo.length > 0){
        const file = new FileReader();

        file.onload = async function(e){
            document.getElementById('photo').value = await e.target.result;
        }

      file.readAsDataURL(photo[0]);

    }
}
/* 

function getData(formI){
    const inputs = formI.querySelectorAll('input,textarea');
    
    inputs.forEach(fields => {
        if(fields.name == 'foto'){
            ConvertToBase64(fields, inputs)
        }
    });
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
} */