if(localStorage.getItem("no-redirect") != "true") {
    const latest = "v1.0.4.2";
    if(!document.location.pathname.includes("/" + latest)) document.location.assign("../" + latest + "/");
}