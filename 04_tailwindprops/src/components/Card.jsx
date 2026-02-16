import React from 'react'

function card({testchar, bio, year='not defined'}) {
    console.log(testchar)
    return (
        <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
            <div>
                <img className="size-48 shadow-xl rounded-md" alt="" src="https://tailwindcss.com/_next/static/media/cover.f75d494c.png" />
            </div>
            <div className="flex items-center md:items-start">
                <span className="text-2xl font-medium">{testchar}</span>
                <span className="font-medium text-sky-500">{bio}</span>
                <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
                    <span>{year}</span>
                </span>
            </div>
        </div>
    )
}

export default card;