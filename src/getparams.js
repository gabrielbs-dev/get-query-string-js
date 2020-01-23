function getParams(){
    const paramsURL = location.href.split(location.pathname)[1];
    const parmasExtracted = paramsURL.substring(1, paramsURL.length).split("&");
    const params = {};

    parmasExtracted.forEach(element => {
        params[element.split("=")[0]] = element.split("=")[1];
    });

    return paramsURL == "" ? {} : params;
}