'use strict';

class Fighter {
	#name;
 	#hp;
	#damage;

	constructor(name, health, damagePerAttack) {
		this.#name = name,
		this.#damage = damagePerAttack,
		this.#hp = health,
		this.toString = () => this.name
	}

	getName() {
		return this.#name;
	}

	getDamage() {
		return this.#damage;
	}

	getHealth() {
		return this.#hp;
	}

	set hp(damage) {
		this.#hp = this.#hp - damage;
	}

	attack(defender) {
		if (this.getHealth() > 0) {
			defender.hp = this.getDamage();
		}
	}
}

function declareWinner(fighter1, fighter2, firstAttacker) {
	let firstFighter;
	let secondFighter;

	if (firstAttacker === fighter1.getName()) {
		firstFighter = fighter1;
		secondFighter = fighter2;
	} else {
		firstFighter = fighter2;
		secondFighter = fighter1;
	}

	// проверка если один из бойцов уже труп.
	if (firstFighter.getHealth() <= 0) {
		console.log('winner: ' + secondFighter.getName());
		return secondFighter.getName();
	}

	if (secondFighter.getHealth() <= 0) {
		console.log('winner: ' + firstFighter.getName());
		return firstFighter.getName();
	}

	while (fighter1.getHealth() > 0 && secondFighter.getHealth() > 0) {
		firstFighter.attack(secondFighter);
		secondFighter.attack(firstFighter);

		if (secondFighter.getHealth() <= 0) {
			console.log(`${firstFighter.getName()} has won!`);
			return firstFighter.getName();
		}

		if (firstFighter.getHealth() <= 0) {
			console.log(`${secondFighter.getName()} has won!`);
			return secondFighter.getName();
		}
	}
}
