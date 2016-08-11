function register() {

    let username=$('#username').val();
    let pass=$('#pass').val();

    let data={
        username: username,
        password:pass
    };

    let baseUrl="https://baas.kinvey.com/";
    let appKey="kid_H11e5tDK";
    let appSecret="3d722cbd26a44c018f36f522520cfa42";

    let method="POST";
    let requestUrl=baseUrl+"user/"+appKey+"/";

    let headers={};
    headers['Authorization']="Basic "+btoa(appKey+":"+appSecret);
    headers['Content-Type']="application/json";

    let request={
        url:requestUrl,
        method:method,
        headers:headers,
        data: JSON.stringify(data)
    };
    
    $.ajax(request);
}