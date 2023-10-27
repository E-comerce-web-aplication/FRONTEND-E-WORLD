
export const createValidation = (setDisableButton, validationForm, formState)=>{
    for (const validationItem of Object.keys(validationForm)){ 
        if(validationForm[validationItem][0](formState[validationItem][0]) === false){
            return `campo ${validationItem} invalido este debe contener`
        }
    }
    setDisableButton(true)
}