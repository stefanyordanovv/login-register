function login() {
    let username=$('#username').val();
    let password=$('#pass').val();


    let data={
        username:username,
        password:password
    }

    let baseUrl="https://baas.kinvey.com/";
    let appKey="kid_H11e5tDK";
    let appSecret="3d722cbd26a44c018f36f522520cfa42";

    let headers={};
    headers['Authorization']="Basic "+btoa(appKey+":"+appSecret);
    headers['Content-Type']="application/json";

    let method="POST";
    let requestUrl=baseUrl+"user/"+appKey+"/login";

    let  request ={
        method:method,
        url:requestUrl,
        headers:headers,
        data:JSON.stringify(data)
    };

        $.ajax(request);
}
