
const getInstallApp = () => {
    const installAppSTR = localStorage.getItem("install")

    if(installAppSTR){
        const storeAppData =JSON.parse(installAppSTR);
        return storeAppData;
    }
    else{
        return [];
    }
}

const addInstallApp = (id) =>{
    const storeAppData = getInstallApp();
    if(storeAppData.includes(id)){
        alert("App installed")
    }
    else{
        storeAppData.push(id);
        const appData = JSON.stringify(storeAppData)
        localStorage.setItem("install", appData)
    }
}

export {addInstallApp, getInstallApp}