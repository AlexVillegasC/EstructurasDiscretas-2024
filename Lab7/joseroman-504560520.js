//HASH TABLE for search engine

class HashTable {
    constructor() {
      this.table = {};
    }
  
    // Simple hash function to generate a key for our table
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % 37;
    }
  
    // Method to add a web page to the hash table
    add(url, keywords) {
      const key = this.hash(url);
      if (!this.table[key]) {
        this.table[key] = [];
      }
      this.table[key].push({ url, keywords, searchCount: 0 });
    }
  
    // Method to search for a web page by URL and increment its search count
    search(url) {
      const key = this.hash(url);
      if (this.table[key]) {
        const entry = this.table[key].find(entry => entry.url === url);
        if (entry) {
          entry.searchCount++;
          return entry;
        }
      }
      return null;
    }
  
    // Method to get the search count for a specific URL
    getSearchCount(url) {
      const entry = this.search(url);
      return entry ? entry.searchCount : 0;
    }
  }
  
  // Example usage:
  
  // Create a new hash table instance
  const searchEngineIndex = new HashTable();
  
  // Add some web pages to the hash table
  searchEngineIndex.add('https://example.com', ['example', 'sample', 'website']);
  searchEngineIndex.add('https://anotherexample.com', ['another', 'example', 'web', 'page']);
  searchEngineIndex.add('https://yetanotherexample.com', ['yet', 'another', 'example']);
  
  // Perform some searches
  searchEngineIndex.search('https://anotherexample.com');
  searchEngineIndex.search('https://anotherexample.com');
  searchEngineIndex.search('https://example.com');
  
  // Get the search count for specific URLs
  const exampleSearchCount = searchEngineIndex.getSearchCount('https://example.com');
  const anotherExampleSearchCount = searchEngineIndex.getSearchCount('https://anotherexample.com');
  
  console.log('Search count for https://example.com:', exampleSearchCount); // Output: 1
  console.log('Search count for https://anotherexample.com:', anotherExampleSearchCount); // Output: 2
  