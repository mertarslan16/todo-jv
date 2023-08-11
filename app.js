const inputValue = document.getElementById("inputValue")
const list = document.getElementById("list")
const successAllert = document.getElementById("success-allert")


const newElement = ()=>{
    if(inputValue.value !== ""){

        var listItem = document.createElement("li");
        listItem.textContent=inputValue.value;
        list.appendChild(listItem);

        inputValue.value="";
        
        successAllert.textContent = "Ürün Eklendi"
        setTimeout(() => {
            successAllert.textContent = "";
        }, 2000);
    }
    else if (inputValue.value === ""){
        successAllert.textContent = "Boş Bir Todo Girilemez"
        setTimeout(() => {
            successAllert.textContent = "";
        }, 2000);
    }
}


newElement();


