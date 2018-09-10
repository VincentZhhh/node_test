let http = require('http'); 
let qs = require('querystring');  

let server = http.createServer(function(req, res) {
    let body = '';  // һ��Ҫ��ʼ��Ϊ"" ��Ȼ��undefined
    req.on('data', function(data) {
        body += data; // �����ܵ�Json����
    });
    req.on('end', function() { 
        res.writeHead(200, {  // ��Ӧ״̬
            "Content-Type": "text/plain",  // ��Ӧ��������
            'Access-Control-Allow-Origin': '*'  // �����κ�һ����������
        });
        if(qs.parse(body).name == 'food') {
            res.write('apple');
        } else {
            res.write('other');
        } 
        res.end();
    });   
});

server.listen(3000);