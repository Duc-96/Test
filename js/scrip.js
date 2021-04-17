$("#registration").validate({
    rules: {
        name: "required",
        phone: {
            required: true,
            minlength: 10,
            maxlength: 12
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