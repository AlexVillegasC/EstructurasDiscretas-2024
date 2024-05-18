class HashTable {
    constructor() {
        this.table = new Array(127); 
        this.size = 0;
    }

    _hash(key) { 
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key, value) {
        const index = this._hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index][i][1] = value;
                    return;
                }
            }
            this.table[index].push([key, value]);
        } else {
            this.table[index] = [];
            this.table[index].push([key, value]);
        }
        this.size++;
    }

    get(key) {
        const index = this._hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    return this.table[index][i][1];
                }
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this._hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1);
                    this.size--;
                    return true;
                }
            }
        }
        return false;
    }
}

// Example usage for hospital patient records
const hospitalRecords = new HashTable();

hospitalRecords.set('1234', { name: 'John Doe', age: 30, medicalHistory: 'flue' });
hospitalRecords.set('5678', { name: 'Jane Smith', age: 25, medicalHistory: 'Asthma' });

console.log(hospitalRecords.get('1234')); // { name: 'John Doe', age: 30, medicalHistory: 'None' }
console.log(hospitalRecords.get('5678')); // { name: 'Jane Smith', age: 25, medicalHistory: 'Asthma' }

hospitalRecords.remove('1234');
console.log(hospitalRecords.get('1234')); // undefined