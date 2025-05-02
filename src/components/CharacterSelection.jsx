import { useState } from "react";
import { character_data, useCharacterContext } from "../context/charcter.context"
import { Canvas } from "@react-three/fiber";
import RotationalCharacter from "./RotationalCharacter";
import { useNavigate } from "react-router-dom";

const CharacterSelection = () => {
    const navigate = useNavigate();
    const character_obj = character_data;

    const charactersArr = Object.keys(character_obj).map(key => character_obj[key]);

    const { character, updateCharacter } = useCharacterContext();

    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % charactersArr.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + charactersArr.length) % charactersArr.length);
    };

    const goHome = () => {
        navigate('/');
    }

    const handleSelectCharacter = (character) => {
        updateCharacter(character);
    }

    return (
        <>
            <div className="character-main-container">
                <div className="bg-character">
                    <div className="btn z-50 back-btn cursor-pointer" onClick={goHome}>
                        <p className='text-5xl'> &lt; </p>
                    </div>

                    <div className="flex justify-center items-center h-full">
                        <div id="animation-carousel" className="relative w-full h-full" data-carousel="static">
                            <div className="relative h-full overflow-hidden rounded-lg">
                                {
                                    charactersArr.map((char, index) => {
                                        return (
                                            <div key={char.id} className={`h-full flex justify-center items-center flex-col w-full ${index === activeIndex ? "block" : "hidden"
                                                }`}
                                                data-carousel-item={index === activeIndex ? "active" : ""}>
                                                <div className="grow basis-1/10  w-28 float-right lg:w-40 sm:w-28">
                                                    <p className='text-lg p-2 lg:p-4 lg:text-3xl sm:text-lg add-search text-center my-4'> {char.name} </p>
                                                </div>
                                                <div
                                                    className="grow basis-1/2 cursor-grab"
                                                >
                                                    <Canvas>
                                                        <RotationalCharacter character={char}></RotationalCharacter>
                                                    </Canvas>
                                                </div>

                                                <div className="grow basis-1/10">
                                                    <div className={char.id === character.id ? "btn btn-disabled  md:w-32 w-60 sm:w-32" : "btn btn-yellow-bottom md:w-32 w-60 sm:w-32"} onClick={() => handleSelectCharacter(char)} style={{ margin: '8px', height: '40px' }}>
                                                        <button className='text-md md:text-lg' type="submit">
                                                            {char.id === character.id ? 'SELECTED' : 'SELECT'}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <button onClick={prevSlide}
                                type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-4/5 px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                <div className="btn btn-yellow-bottom w-10 h-10 z-30 rounded-full absolute top-0 start-0">
                                    <p className='text-5xl'> &lt; </p>
                                </div>
                            </button>

                            <button onClick={nextSlide}
                                type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-4/5 px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                <div className="btn btn-yellow-bottom w-10 h-10 z-30 rounded-full absolute top-0 start-0">
                                    <p className='text-5xl'> &gt; </p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CharacterSelection