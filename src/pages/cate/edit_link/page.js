require ('!style-loader!css-loader!sass-loader!../../../public-resource/css/components-dir/base.scss');

var user = {}; //全局对象
// 表单初始化
user.formInit = function () {
    $.post('http://127.0.0.1:80/SCIEManagement/category/manage', function (data) {
        if(typeof data === 'string') {
            data = JSON.parse(data);
        }
        var status = data.code;//状态码
        if (status == 200) {
            var aaData = data.category.category;
            console.log(aaData);
            // 表格解析
            var str = '<option value="0" selected="selected">作为一级栏目</option>';
            for(var i = 0; i < aaData.length; i++) {
                // 栏目名称分级显示
                if (aaData[i].pid == 0) {
                    str +=  '<option value="' +
                        aaData[i].id +
                    '">' +
                        aaData[i].name +
                    '</option>';
                }        
            }
            $('#pid').html(str);
        }
        else $.notice("提示！","服务器连接失败");
    });
}
// 更新数据
user.update = function(data) {
    console.log(data);
    $('#doc-title').val(data.title);
    $('#link-url').val(data.url);

}
// 表单验证
user.validate = function(ajaxArgs) {
    var rCheckSpace = /^\s+$/;
    if (rCheckSpace.test(ajaxArgs.title)) {
        $.notice("提示！","栏目名称不能为空！");
        return false;
    }
    if (rCheckSpace.test(ajaxArgs.url)) {
        $.notice("提示！","链接地址不能为空！");
        return false;
    }
    return true;
}
// 文件上传
user.fileUpload = function () {
    $.ajaxFileUpload({
        url: 'http://127.0.0.1:80/SCIEManagement/file/category/upload',
        secureuri: false,
        fileElementId: 'doc-cover',
        beforeSend: $.notice('提示！', '正在提交...', function () {
            user.loading($('.jq-notice-context'));
        }),
        dataType: 'json',
        success: function (data) {
            $('.jq-notice-context').html('上传成功!');
            setTimeout('$.closeNotice()',2000); 

            console.log($("#doc-cover").val());
        }
    }); 
}
// 提交创建
user.submit = function (event) {
    event.preventDefault();
    // 获取编辑文字id
    var urlinfo = window.location.href;
    var id = urlinfo.split("?")[1].split("=")[1];
    var updateData = {
            id: id,
            pid: $('#pid').val(),
            title: $('#doc-title').val(),
            url: $('#link-url').val(),
            type: "link",
            cover: $("#doc-cover").val()
    };
    // 验证
    user.validate(updateData);
    console.log(updateData);
    // 更新
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1/SCIEManagement/category/update/url',
        beforeSend: $.notice('提示！', '正在提交...', function () {
            user.loading($('.jq-notice-context'));
        }),
        data: updateData,
        success: function(data){
            if(typeof data === 'string') {
                data = JSON.parse(data);
            }
            var status = data.code;//状态码
            console.log(data);
            if(status == 200) {
                $('.jq-notice-context').html('提交成功!');
                setTimeout('window.location.href = "../index/page.html"',2000); 
            } else {
                $('.jq-notice-context').html('提交失败!');
            }
        }
    });

}
// 加载图标
user.loading = function (element) {
    var loadingHtml = '<div id="loading" style="background:url(../../../public-resource/imgs/loading.gif) no-repeat;"></div>';
    element.html(loadingHtml);
}

$(document).ready(function () {
    // 获取编辑文字id
    var urlinfo = window.location.href;
    var id = urlinfo.split("?")[1].split("=")[1];
    $('#doc-cover').filestyle({buttonText: "浏览"});
    // 侧栏添加active
    $('.side-nav li').eq(0).find('a').addClass('active');
    var ajaxArgs = {
        id: id
    }
    // 获取栏目信息
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:80/SCIEManagement/category/find",
        data: ajaxArgs,
        success: function (data) {
            var status = data.code;//状态码
                console.log(data);

            if (status == 200) {
                var Doc = data.category;
                user.update(Doc);
                window.Doc = Doc;
                console.log(Doc);
            }
            else $.notice("提示！","服务器连接失败!");
        }
    });

    // 初始化
    user.formInit();
    // 文件上传
    $('#doc-cover').on('change', user.fileUpload);
    // 表单提交
    $('.btn-submit').on('click', user.submit);
   
});
