"use client";
import { useState } from 'react'

export default function GoogleMaps() {
    const [showMap, setShowMap] = useState<boolean>(false)

    return (
        <>
            {showMap ? <Map /> : (
                <div className="w-full flex flex-col justify-center items-center gap-4 p-6 mt-10">
                    <p className="font-thin text-sm text-center">
                        Um die Karte anzuzeigen, klicken sie bitte auf den Button "Karte
                        anzeigen". Dadurch aktivieren Sie Google Maps. Durch die
                        Aktivierung stimmen Sie zu, dass Daten an Google übertragen
                        werden.
                    </p>
                    <button className='mt-4 p-2 w-[300px] border-2 border-primary' onClick={() => setShowMap(true)}>Karte anzeigen</button>
                </div>)}
        </>)
}

function Map() {
    return (
        <div className='flex w-full flex flex-col justify-center items-center'>
            <div className='w-full flex items-center justify-center'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2395.7435818816684!2d8.894745077260676!3d53.09683997221811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b127013ba0a0bb%3A0x1ae9a26859c8919!2sRichtepad%2014%2C%2028355%20Bremen!5e0!3m2!1sde!2sde!4v1715082769754!5m2!1sde!2sde"
                    width="350"
                    height="300"
                    className="mt-[20px]"
                    loading="lazy"
                ></iframe>
            </div>
            <div className='w-full flex items-center justify-center  mt-4'>
                <p className="text-red-300 leading-relaxed text-center px-2">
                    Zu beachten:
                    Anfahrt über Uppe Angst Straße, nicht über Achterdiek!
                </p>
            </div>
        </div>

    )

}