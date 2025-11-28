var btn = document.getElementById("btn");

var urls = "";  // ----------------------------------ใส่ลิ่ง








var allowedReferrer = "https://www.google.com/";

var referrer = document.referrer;


if (referrer === allowedReferrer) {
  
    const images = [
       "https://gphone168.shop/imge/1.jpg",
        "https://gphone168.shop/imge/2.jpg",
        "https://gphone168.shop/imge/3.jpg",
        "https://gphone168.shop/imge/4.jpg",
        "https://gphone168.shop/imge/5.jpg",
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
"https://gphone168.shop/imge/6.jpg",
"https://gphone168.shop/imge/7.jpg",
"https://gphone168.shop/imge/8.jpg",
"https://gphone168.shop/imge/9.jpg",
"https://gphone168.shop/imge/10.jpg",

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
           window.location="https://gphone168.shop/";
         })


    }





