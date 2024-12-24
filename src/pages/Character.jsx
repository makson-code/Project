import React from 'react'
import { useParams } from 'react-router-dom'
import { useCharacter } from '../hooks/useCharacter'
import { Card } from '../components/Card/Card1/Card1/'
import { Text } from '../components/Text/Text/'

export const Character = () => {
	const { characterId } = useParams()
	const {data: character, isFetched} = useCharacter(characterId)

	return (
		<>
			{isFetched && <Card data={character}/>}
			{isFetched && <Text data={character} />} 
		</>
	)
}
