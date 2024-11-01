import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import PokemonService from '../services/pokemonService';
import { AxiosError } from 'axios';

import PokemonImage from '../components/PokemonImage';

const MainPage = () => {

    const [pokemonData, setPokemonData] = useState([]);
    const [primaryType, setPrimaryType] = useState([]);
    const [secondaryType, setSecondaryType] = useState([]);
    const [abilities, setAbilities] = useState([]);
    const [stats, setStats] = useState([]);
    const [versions, setVersions] = useState([]);

    function getRandomPkm(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    const getTypes = async (typeName) => {
        try {
            const response = await PokemonService.getTypes(typeName);
            return response;
        }
        catch (error) {
            console.log(error);
            if (error instanceof AxiosError) {
                if (error.response?.status === 404) {
                    toast.error("Tipo no encontrado");
                }
                else {
                    toast.error("Ocurrió un error al obtener el tipo");
                }
            }
        }
    }

    const getPokemon = async () => {
        const randomPkm = getRandomPkm(386);
        try {
            const response = await PokemonService.getPokemon(randomPkm);
            setPokemonData(response);
            setAbilities(response.abilities);
            setStats(response.stats);
            setVersions(response.game_indices);
            const primaryType = await getTypes(response.types[0].type.name);
            setPrimaryType(primaryType.names[5].name);
            if (response.types.length > 1) {
                const secondaryType = await getTypes(response.types[1].type.name);
                setSecondaryType(secondaryType.names[5].name);
            }
            else {
                setSecondaryType(null);
            }
        }
        catch (error) {
            console.log(error);
            if (error instanceof AxiosError) {
                if (error.response?.status === 404) {
                    toast.error("Pokemon no encontrado");
                }
                else {
                    toast.error("Ocurrió un error al obtener el pokemon");
                }
            }
        }
    }

    useEffect(() => {
        getPokemon();

        setTimeout(getPokemon, 30000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="w-11/12 px-20 py-10 rounded-xl bg-gray-300 dark:bg-neutral-800">

            <h1 className="text-3xl text-center capitalize mb-10 text-black dark:text-white">{pokemonData.name} Nº {pokemonData.id}</h1>
            <div className='flex gap-10'>
                <PokemonImage pkmId={pokemonData.id} />
                <div>
                    {secondaryType && <h2 className='text-2xl text-gray-700 dark:text-neutral-300 mb-3'>Tipos</h2> || <h2 className='text-2xl text-gray-700 dark:text-neutral-300 mb-3'>Tipo</h2>}
                    <div className='flex gap-3'>
                        <img className={`size-[50px] rounded-full p-2 transition-all ${primaryType}`} src={`/src/components/pokémonTypes/${primaryType}.svg`} alt="" />
                        {secondaryType &&
                            <img className={`size-[50px] rounded-full p-2 transition-all ${secondaryType}`} src={`/src/components/pokémonTypes/${secondaryType}.svg`} alt="" />
                        }
                    </div>
                    <h2 className='text-2xl text-gray-700 dark:text-neutral-300 mt-5'>Altura:</h2>
                    <p className='text-lg text-gray-500 dark:text-neutral-300 mb-3'>{pokemonData.height / 10}m</p>

                    <h2 className='text-2xl text-gray-700 dark:text-neutral-300'>Peso:</h2>
                    <p className='text-lg text-gray-600 dark:text-neutral-300 mb-3'>{pokemonData.weight / 10}kg</p>

                    <h2 className='text-2xl text-gray-700 dark:text-neutral-300'>Habilidades</h2>
                    <ul className='text-lg text-gray-600 dark:text-neutral-300'>
                        {abilities.map((ability, index) => {
                            return <li className='mb-2' key={index}>{ability.ability.name}</li>
                        })}
                    </ul>
                </div>
                <div>
                    <h2 className='mb-5 text-2xl text-gray-700 dark:text-neutral-300'>Estadísticas</h2>
                    <ul className='text-lg text-gray-600 dark:text-neutral-300'>
                        {stats.map((stat, index) => {
                            return <li className='mb-2' key={index}>{stat.stat.name}: {stat.base_stat}</li>
                        })}
                    </ul>
                </div>
                <div>
                    <h2 className='mb-5 text-2xl text-gray-700 dark:text-neutral-300'>Disponible en los juegos:</h2>
                    <div className='grid grid-cols-4 gap-3'>
                        {versions.map((version, index) => {
                            return <p className='text-lg text-gray-600 dark:text-neutral-300 mb-3' key={index}>{version.version.name}</p>
                        })}
                    </div>
                </div>
            </div>
            <div className='flex justify-end'>
                <button className='bg-slate-200 dark:bg-[#2b2b2b] border-2 border-gray-500 cursor-pointer transition-all p-5 rounded-full hover:bg-gray-300 hover:dark:bg-neutral-700' onClick={() => getPokemon()}>
                    <span className="text-black dark:text-white">Mostrar Pokémon</span>
                </button>
            </div>
        </div>
    );
}
export default MainPage;