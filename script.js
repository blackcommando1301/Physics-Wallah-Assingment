 let ogButton=document.querySelector(".inputButton");
 let inputButton=document.querySelector(".DButton");
  let table=document.querySelector(".table");


   inputButton.addEventListener("click",function(){
    ogButton.click();
   })

 ogButton.addEventListener("change",function(e){
    let allFiles=e.target.files;

    for(let i=0;i<allFiles.length;i++){
       let newTR=document.createElement("tr");
       console.log(allFiles[i]);
       let fileName=allFiles[i].name;
       let fileSize=allFiles[i].size;
       let type=allFiles[i].type;
       let lastModifiedDate=allFiles[i].lastModifiedDate;
        fileName=fileName.split('.').slice(0,-1);


        // size

        if(fileSize>0 && fileSize*1024<1){
            fileSize=fileSize*1024 + " byte"
        }else if(fileSize>=1 && fileSize<1024*1024){
            fileSize=fileSize+" kb";
        }else if(fileSize>=1024){
            fileSize=fileSize/(1024*1024)+" mb";
        }
          
       newTR.innerHTML=`
       <th scope="row">${i+1}</th>
       <td>${fileName}</td>
       <td>${fileSize}</td>
       <td><strong>TYPE-</strong>${type} , <strong>Last Modified Date-</strong>${lastModifiedDate}
       </td>
       
       `
       table.appendChild(newTR);
    }
 })