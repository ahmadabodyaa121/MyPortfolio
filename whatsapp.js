function sendToWhatsapp() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.popup').style.animation = '';


    if (document.getElementById('firstName').value === '' || document.getElementById('lastName').value === '' || document.getElementById('email').value === '' || document.getElementById('message').value === '') {
        alert('Please fill in all fields');
        return;

    }


        let phoneNumber = '+352681588623';
        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        let email = document.getElementById('email').value;
        let country = document.getElementById('country').value;
        let message = document.getElementById('message').value;
        let url = `https://wa.me/${phoneNumber}?text=السلام عليكم ورحمة الله وبركاته 
    اسمي ${firstName} ${lastName} 
        والبريد الإلكتروني ${email}. 
        والدولة ${country}.
     وأريد أن أقول: ${message}`;
        window.open(url, '_blank').focus();
    
}
function whatsappsupport(){
    let phoneNumber = '+352681588623';
    let message = 'السلام عليكم ورحمة الله وبركاته كيف حالك أستاذ أحمد عبار أريد الاستفسار عن الخدمات التي تقدمها في مجال برمجة مواقع الويب';
    let url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank').focus();
   
    
}

