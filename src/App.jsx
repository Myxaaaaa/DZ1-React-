import React from 'react';

    const user = {
        name: 'Hedy Lamarr',
        imageURL: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 180,
        info: '19 января 2000 года Хеди Ламарр умерла. Посмертно ее включили в американский Национальный зал славы изобретателей. Ламарр была уверена: «Мозги людей интереснее, чем внешность», и сегодня про нее все чаще вспоминают не как про красивую актрису, а как про «мать Wi-Fi» и изобретательницу'
}

const users = {
    name: 'Geeks team',
    image: 'https://geeks.kg/back_media/main_block/2023/06/22/96425634-e4e2-44ae-8f86-243519f735f3.webp',
    imageSize: 540,
    info: 'Образовательный центр Geeks (Гикс) был основан Fullstack-разработчиком Айдаром Бакировым и Android-разработчиком Нургазы Сулаймановым в 2018-ом году в Бишкеке с целью дать возможность каждому человеку, даже без опыта в технологиях, гарантированно освоить IT-профессию. В данный момент более 1200 студентов в возрасте от 12 до 45 лет изучают здесь программирование, дизайн и английский язык. Филиальная сеть образовательного центра представлена в таких городах, как Бишкек, Ош и Кара-Балта.\n' +
        '\n'

}

export default function Profile() {
    return (
        <div style={{display:"flex", justifyContent: "center", alignItems: "center", gap: 50, textAlign:"center"}}>
            <h1>{user.name}</h1>
            <img className='avatar'
                 src={user.imageURL}
                 alt={"photo" + user.name}
                 style={{width: user.imageSize, height: user.imageSize}}
        />
            <p style={{width: 300, textAlign:"center"}}>{user.info}</p>
            <div className= 'geeks'>
                <h2>{users.name}</h2>
                <img src={users.image} alt="geeks" style={{width: users.imageSize}}
                />
                <p style={{width:650}}>{users.info}</p>
            </div>
        </div>
    )
}