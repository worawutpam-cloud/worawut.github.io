var btn = document.getElementById("btn");

var urls = "";  // ----------------------------------ใส่ลิ่ง








var allowedReferrer = "https://www.google.com/";

var referrer = document.referrer;


if (referrer === allowedReferrer) {
  
    const images = [
        "img/1.jpg",
        "img/2.jpg",
        "img/3.jpg",
        "img/4.jpg",
        "img/5.jpg",
        ]
        for (let imagePath of images) {
            let img = document.createElement('img');
            img.src = imagePath;
            img.alt = "Image from " + imagePath;
            
            // คุณสามารถกำหนด style หรือ attribute อื่นๆ สำหรับภาพได้ตามต้องการ
            img.style.width = '100%'; // ยกตัวอย่าง: กำหนดความกว้างของภาพ
        
            imageContainer.appendChild(img);
        }
        btn.addEventListener('click', () => {
            window.location=urls;
         })

    } else {
        const images = [
            "img/6.jpg",
            "img/7.jpg",
            "img/8.jpg",
            "img/9.jpg",
            "img/10.jpg",
            ]
            for (let imagePath of images) {
                let img = document.createElement('img');
                img.src = imagePath;
                img.alt = "Image from " + imagePath;
                
                // คุณสามารถกำหนด style หรือ attribute อื่นๆ สำหรับภาพได้ตามต้องการ
                img.style.width = '100%'; // ยกตัวอย่าง: กำหนดความกว้างของภาพ
            
                PgPhone.appendChild(img);
            }
         btn.addEventListener('click', () => {
           window.location="https://www.facebook.com/p/Phone-Goodies-100076184948166/";
         })


    }





