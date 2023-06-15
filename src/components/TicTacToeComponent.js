import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icons from './Icons';
import colors from '../colors';
import commonStyles from '../styles';
import {SnackBar} from './SnackBar';

const {
  empty,
  cross,
  circle,
  winMsg,
  withdrawMatch,
  alreadyFilledPosition,
  startNewGame,
  reloadTheGame,
} = constants;
const {green, violet, yellow, white, warningRed, black} = colors;
const getSceenWidth = Dimensions.get('screen').width;
const buttonWidth = getSceenWidth - 32;

function TicTacToeComponent(): JSX.Element {
  const [gameState, setGameState] = useState(new Array(9).fill(empty, 0, 9));
  const [isCross, setIsCross] = useState(false);
  const [gameWinner, setGameWinner] = useState('');

  const checkIsWinner = () => {
    if (
      gameState[0] === gameState[1] &&
      gameState[1] === gameState[2] &&
      gameState[0] !== empty
    ) {
      setGameWinner(`${gameState[0]} ${winMsg}`);
    } else if (
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5] &&
      gameState[3] !== empty
    ) {
      setGameWinner(`${gameState[3]} ${winMsg}`);
    } else if (
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8] &&
      gameState[6] !== empty
    ) {
      setGameWinner(`${gameState[6]} ${winMsg}`);
    } else if (
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6] &&
      gameState[0] !== empty
    ) {
      setGameWinner(`${gameState[0]} ${winMsg}`);
    } else if (
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7] &&
      gameState[1] !== empty
    ) {
      setGameWinner(`${gameState[1]} ${winMsg}`);
    } else if (
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8] &&
      gameState[2] !== empty
    ) {
      setGameWinner(`${gameState[2]} ${winMsg}`);
    } else if (
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6] &&
      gameState[2] !== empty
    ) {
      setGameWinner(`${gameState[2]} ${winMsg}`);
    } else if (
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8] &&
      gameState[0] !== empty
    ) {
      setGameWinner(`${gameState[0]} ${winMsg}`);
    } else if (!gameState.includes(empty, 0)) {
      setGameWinner(withdrawMatch);
    }
  };

  const reloadGame = () => {
    setIsCross(false);
    setGameState(new Array(9).fill(empty, 0, 9));
    setGameWinner('');
  };

  const onChangeItem = itemNumber => {
    if (gameWinner) {
      return SnackBar(gameWinner, white, green);
    }
    if (gameState[itemNumber] === empty) {
      gameState[itemNumber] = isCross ? cross : circle;
      setIsCross(!isCross);
    } else {
      return SnackBar(alreadyFilledPosition, white, warningRed);
    }
    checkIsWinner();
  };

  return (
    <View style={[styles.sectionContainer]}>
      <Text style={styles.title}>Tic Tac Toe Game</Text>
      <View
        style={[
          commonStyles.height50,
          commonStyles.borderRadius5,
          commonStyles.justifyContentCenter,
          commonStyles.alignItemsCenter,
          isCross ? styles.playerX : styles.playerO,
          commonStyles.shadowEffect,
        ]}>
        <Text style={styles.sectionTitle}>
          {gameWinner ? gameWinner : `Player ${isCross ? 'X' : 'O'} 's turn`}
        </Text>
      </View>
      <FlatList
        data={gameState}
        style={{
          width: buttonWidth,
          marginVertical: 16,
        }}
        contentContainerStyle={commonStyles.justifyContentSpaceAround}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => onChangeItem(index)}
            style={[
              commonStyles.justifyContentCenter,
              commonStyles.alignItemsCenter,
              commonStyles.height50,
              {
                width: buttonWidth / 3,
                marginVertical: 8,
              },
            ]}>
            <Icons name={item} />
          </TouchableOpacity>
        )}
        numColumns={3}
      />
      <TouchableOpacity
        style={[
          styles.reloadButton,
          commonStyles.shadowEffect,
          commonStyles.justifyContentCenter,
          commonStyles.alignItemsCenter,
        ]}
        onPress={() => reloadGame()}>
        <Text style={styles.reloadTitle}>
          {gameWinner ? startNewGame : reloadTheGame}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 16,
    backgroundColor: white,
  },
  title: {
    fontSize: 20,
    color: green,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: white,
  },
  reloadTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: white,
  },
  reloadButton: {
    height: 40,
    borderRadius: 5,
    backgroundColor: violet,
    width: buttonWidth - 40,
    alignSelf: 'center',
    marginTop: 20,
  },
  playerX: {
    backgroundColor: green,
    color: white,
  },
  playerO: {
    backgroundColor: yellow,
    color: white,
  },
});

export default TicTacToeComponent;
