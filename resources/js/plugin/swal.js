import Swal from "sweetalert2";

class sweetalert {

    success(title = 'عملیات موفقیت آمیز بود', type = 'success') {
        Swal.fire({
            position: 'center',
            icon: type,
            title: title,
            showConfirmButton: false,
            timer: 1500
        })
    }

    fire(title,text,icon,confirm_text) {
        Swal.fire({
           title,
            text,
            icon,
            confirmButtonText:confirm_text
        })
    }


    error(title='به مشکل خوردیم',type='error') {
        this.success(title,type)
    }

    confirm(title='ایا مطمئن هستد؟',type='warning',text='نمیتوانید تغییرات را بازگردانی کنید') {
       return  Swal.fire({
            title: title,
            text: text,
            icon: type,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'تایید',
            cancelButtonText: 'لغو',
        })
    }


}


const swal = new sweetalert();
export default swal;
