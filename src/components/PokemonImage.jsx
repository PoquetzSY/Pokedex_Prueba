import PropTypes from 'prop-types';

const PokemonImage = ({pkmId}) => {
    PokemonImage.propTypes = {
        pkmId: PropTypes.number.isRequired,
    };

    return (
        <div className='rounded-xl w-80 h-96 flex justify-center p-5 mr-10 bg-white dark:bg-neutral-900'>
            <img className='size-64 p-2 bg-slate-200 dark:bg-neutral-800 rounded-md' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmId}.png`} alt="Front image" />
        </div>
    )
}

export default PokemonImage;