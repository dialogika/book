$(document).on('click','.send_contact', function(){
    var input_blanter = document.getElementById('names');

    /* Whatsapp Settings */
    var walink = 'https://web.whatsapp.com/send',
        phone = '6285162992597',
        walink2 = 'Halo kak saya sudah mengisi form untuk download ebook, mengirimkan ebooknya yaa kak,' 
                + '%0A%0A' 
                + 'Sebelumnya perkenalkan saya: ',
        text_yes = 'Terkirim.',
        text_no = 'Isi semua Formulir lalu klik Send.';

    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var walink = 'whatsapp://send';
    }

    if("" != input_blanter.value){

     /* Call Input Form */
    var input_name2     = $("#names").val(),
        input_voucher2  = $("#voucher :selected").val(),
        input_message2  = $("#message").val();

    /* Final Whatsapp URL */
    var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
        '*Name*         : ' + input_name2 + '%0A' +
        '*Saya Ingin Voucher Kelas Public Speaking* : ' + input_voucher2 + '%0A' +
        '*Nomor Whatsapp*  : ' + input_message2 + '%0A';

    /* Whatsapp Window Open */
    window.open(blanter_whatsapp,'_blank');
    document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';
    } else {
    document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
    }
});