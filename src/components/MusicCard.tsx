import { useLastFM } from 'use-last-fm'

export const MusicCard = () => {
    const truncate = (str: string, n: number) => str.length > n ? str.substr(0, n - 1) + '...' : str;
    // The last.fm api keys aren't even private :skull:
    const lastFM = useLastFM('cowlez', "70a9b6cf74b6b6d5e3b72c98dcce7400", 5000, 'large');

    if (['connecting', 'error'].includes(lastFM.status)) return null;

    return (
        <a
            href={lastFM.status === 'playing' ? lastFM.song.url : 'https://last.fm/cowlez'}
            rel="noopener noreferrer"
            target="_blank"
            className="focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 p-3 rounded-md border border-gray-800 dark:border-gray-400 shadow flex flex-row max-w-sm"
        >
            {lastFM.status === 'idle' && (
                <img
                    height={45}
                    width={45}
                    alt="Song cover art"
                    placeholder="blur"
                    className="rounded shadow max-h-[45px]"
                    src="/img/idle-music.png"
                />
            )}
            {lastFM.status === 'playing' && (
                <img
                    height={45}
                    width={45}
                    alt={lastFM.song.name}
                    className="rounded shadow max-h-[45px]"
                    src={lastFM.song.art}
                />
            )}
            <div className="my-auto ml-4">
                <div className="font-semibold text-sm sm:text-regular">
                    {lastFM.status === 'playing' ?
                    `Listening to ${truncate(lastFM.song.name, 25)}` :
                    'Not listening to anything'}
                </div>
                <p className="text-xxs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-[1.1em] inline" viewBox="0 0 384 512"> <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/> </svg> Spotify
                </p>
            </div>
        </a>
    )
}
