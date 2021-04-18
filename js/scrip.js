$(document).ready(function() {
    $("#submit").click(function() {
        var form_data = {
            "name": $("#registration :text[name='name']").val(),
            "phone": $("#registration :text[name='phone']").val(),
            "position": $("#position").val(),
            "exp": $("#exp").val(),
            "picture": $("#registration :file[name='img']").val(),
            "email": $("#email").val(),
        };
        $("#registration").validate({
            rules: {
                name: "required",
                phone: {
                    required: true,
                    minlength: 10,
                    maxlength: 12,
                    number: true
                },
                email: {
                    required: true,
                    email: true
                },
                exp: "required",
                img: "required",
            },

            messages: {
                name: "Vui lòng nhập họ tên",
                phone: {
                    required: "Vui lòng nhập số điện thoại",
                    minlength: "Số điện thoại tối thiểu là 10 số",
                    maxlength: "Số điện thoại tối đa là 12 số",
                    number: "Vui lòng nhập số"
                },
                email: {
                    required: "Vui lòng nhập email",
                    email: "Email chưa đúng cú pháp"
                },
                exp: "Vui lòng điền kinh nghiệm làm việc",
                img: "Hình ảnh không được trống"
            },
            submitHandler: function(form) {
                form.submit();
            }
        });

        if ($('#registration').valid()) {
            var url = 'https://freemind-test.netlify.app/.netlify/functions/test';
            jQuery.ajax({
                url: url,
                type: "POST",
                data: form_data,
                dataType: "json",
                success: function(respon, status, jqXHR) {

                }
            });
        }
        return false;
    });
});