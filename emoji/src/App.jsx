import React, { useState, useEffect } from 'react';
import './index.css';

const symbols = ['🍒', '🍋', '🍌', '😄', '🍇', '⭐', '🔔', '💎'];

const Header = () => (
  <header>
    <span className="span-header">🎰</span>
    Slot Machine
    <span className="span-header">🎰</span>
  </header>
);

const SlotMachine = () => {
  const [reels, setReels] = useState(['😄', '🍋', '🍌']);
  const [balance, setBalance] = useState(100);
  const [bet, setBet] = useState(10);
  const [message, setMessage] = useState('');
  const [spinning, setSpinning] = useState(false);
  const [jackpot, setJackpot] = useState(1000);

  useEffect(() => {
    const jackpotTimer = setInterval(() => {
      setJackpot(prev => prev + 1);
    }, 1000);

    return () => clearInterval(jackpotTimer);
  }, []);

  const spinReels = () => {
    if (balance < bet) {
      setMessage('Insufficient funds!');
      return;
    }

    setSpinning(true);
    setMessage('');
    setBalance(balance - bet);

    let spins = 0;
    const maxSpins = 20;
    const spinInterval = setInterval(() => {
      setReels(reels.map(() => symbols[Math.floor(Math.random() * symbols.length)]));
      spins++;

      if (spins >= maxSpins) {
        clearInterval(spinInterval);
        checkWin();
        setSpinning(false);
      }
    }, 100);
  };

  const checkWin = () => {
    const [reel1, reel2, reel3] = reels;
    if (reel1 === reel2 && reel2 === reel3) {
      if (reel1 === '💎') {
        setBalance(balance + jackpot);
        setMessage(`🎉 JACKPOT! You won $${jackpot}! 🎉`);
        setJackpot(1000);
      } else {
        const winAmount = bet * 10;
        setBalance(balance + winAmount);
        setMessage(`🎉 You won $${winAmount}! 🎉`);
      }
    } else if (reel1 === reel2 || reel2 === reel3 || reel1 === reel3) {
      const winAmount = bet * 2;
      setBalance(balance + winAmount);
      setMessage(`🎉 You won $${winAmount}! 🎉`);
    } else {
      setMessage('😢 Try Again! 😢');
    }
  };

  const resetGame = () => {
    setBalance(100);
    setBet(10);
    setMessage('');
    setJackpot(1000);
  };

  const changeBet = (amount) => {
    const newBet = Math.max(1, Math.min(100, bet + amount));
    setBet(newBet);
  };

  return (
    <div className="slot-machine">
      <div className="jackpot">Jackpot: ${jackpot}</div>
      <div className="reels">
        {reels.map((symbol, index) => (
          <div key={index} className={`reel ${spinning ? 'spinning' : ''}`}>{symbol}</div>
        ))}
      </div>
      <div className="controls">
        <button className="bet-button" onClick={() => changeBet(-1)}>-</button>
        <span className="bet">Bet: ${bet}</span>
        <button className="bet-button" onClick={() => changeBet(1)}>+</button>
        <button className="spin-button" onClick={spinReels} disabled={spinning}>
          {spinning ? 'Spinning...' : 'Spin'}
        </button>
        <button className="reset-button" onClick={resetGame}>Reset</button>
      </div>
      <div className="balance">Balance: ${balance}</div>
      <div className="message">{message}</div>
    </div>
  );
}

const App = () => {
  return (
    <>
      <Header />
      <SlotMachine />
    </>
  )
}

export default App;