import React, { createContext, useContext, useState } from "react";
import Leon from "../components/characters/Leon";
import Bibi from "../components/characters/Bibi";
import Buzz from "../components/characters/Buzz";
import Bit from "../components/characters/Bit";
import Otis from "../components/characters/Otis";
import Spike from "../components/characters/Spike";
import Sandy from "../components/characters/Sandy";

export const character_data = {
    bibi: {
        id: 0,
        name: 'Bibi',
        path: '/3D/heroine_bibi_brawl_stars.glb',
        idle: 'CHARACTER|bibi_gamer_idle',
        walk: 'CHARACTER|bibi_gamer_walk',
        run: 'CHARACTER|bibi_gamer_attack',
        win: 'CHARACTER|bibi_gamer_win',
        component: Bibi,
    },
    bit: {
        id: 1,
        name: '8 Bit',
        path: '/3D/virus_8-bit.glb',
        idle: '8vit_virus_idle',
        walk: '8vit_virus_walk',
        run: '8vit_virus_attack',
        win: '8vit_virus_win',
        component: Bit
    },
    buzz: {
        id: 2,
        name: 'Buzz',
        path: '/3D/buzz_brawl_stars.glb',
        idle: 'CHARACTER|buzz_idle',
        walk: 'CHARACTER|buzz_walk',
        run: 'CHARACTER|buzz_super_jump',
        win: 'CHARACTER|buzz_win',
        component: Buzz
    },
    leon: {
        id: 3,
        name: 'Leon',
        path: '/3D/leon_ghost_geo.glb',
        idle: 'leon_ghost_idle',
        walk: 'leon_ghost_walk',
        run: 'leon_ghost_attack',
        win: 'leon_ghost_win',
        component: Leon
    },
    otis: {
        id: 4,
        name: 'Otis',
        path: '/3D/otis_geo.glb',
        idle: 'otis_idle',
        walk: 'otis_walk',
        run: 'otis_attack',
        win: 'otis_win',
        component: Otis
    },
    sandy: {
        id: 5,
        name: 'Sandy',
        path: '/3D/sandy_lantern_geo.glb',
        idle: 'sandy_lantern_idle',
        walk: 'sandy_lantern_walk',
        run: 'sandy_lantern_attack',
        win: 'sandy_lantern_win',
        component: Sandy
    }, spike: {
        id: 6,
        name: 'Spike',
        path: '/3D/spike_geo.glb',
        idle: 'spike_idle',
        walk: 'spike_walk',
        run: 'spike_attack',
        win: 'spike_win',
        component: Spike
    }
}

const CharacterContext = createContext();

function randomNumber() {
    return Math.floor(Math.random() * 7) + 1;
}

function getCharacter(index) {
    return character_data[Object.keys(character_data)[index]]
}

export const CharacterProvider = ({ children }) => {
    const characterIndex = +JSON.parse(window.sessionStorage.getItem('characterIndex')) ?? randomNumber()
    const [character, setCharacter] = useState(getCharacter(characterIndex));

    const updateCharacter = (character) => {
        window.sessionStorage.setItem('characterIndex', character.id);
        setCharacter(character)
    }

    return (
        <CharacterContext.Provider value={{ character, updateCharacter }}>
            {children}
        </CharacterContext.Provider>
    );
};

export const useCharacterContext = () => useContext(CharacterContext);
